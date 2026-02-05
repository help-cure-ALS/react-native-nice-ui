import React, { memo, useState, useRef, forwardRef, useImperativeHandle } from 'react';
import {
    Platform,
    Pressable,
    StyleProp,
    StyleSheet,
    Text,
    TextInput,
    TextInputProps,
    View,
    ViewStyle,
    TextStyle
} from 'react-native';

import { Eye, EyeOff } from '../assets/icons';
import { useTheme } from '../theme';
import { useListContext } from './List';

export interface ListInputItemProps extends Omit<TextInputProps, 'style'> {
    /** Label text above the input (or left side when inline) */
    label?: string;
    /** Label text right of the input (e.g. unit "kg", "€") */
    rightLabel?: string;
    /** Show asterisk after label */
    required?: boolean;
    /** Horizontal layout: label left, input right (like List.Item with rightTitle) */
    inline?: boolean;
    /** Show password toggle button */
    showPasswordToggle?: boolean;
    /** Size of the password toggle icon */
    passwordToggleSize?: number;
    /** Disable the input */
    disabled?: boolean;
    /** Hide bottom border (auto-set for last item) */
    lastItem?: boolean;
    /** Label text style */
    labelStyle?: StyleProp<TextStyle>;
    /** Right label text style */
    rightLabelStyle?: StyleProp<TextStyle>;
    /** Input text style */
    inputStyle?: StyleProp<TextStyle>;
    /** Outer container style */
    containerStyle?: StyleProp<ViewStyle>;
    /** Inner wrapper style (padding, minHeight) */
    wrapperStyle?: StyleProp<ViewStyle>;
    /** Divider/border style */
    dividerStyle?: StyleProp<ViewStyle>;
}

export interface ListInputItemRef {
    focus: () => void;
    blur: () => void;
    clear: () => void;
    isFocused: () => boolean;
}

const ListInputItemComponent = forwardRef<ListInputItemRef, ListInputItemProps>((props, ref) => {
    const { colors, tokens } = useTheme();
    const { spaced } = useListContext();
    const inputRef = useRef<TextInput>(null);

    const {
        // List-specific props
        label,
        rightLabel,
        required = false,
        inline = false,
        showPasswordToggle = false,
        passwordToggleSize = 22,
        disabled = false,
        lastItem = false,
        labelStyle,
        rightLabelStyle,
        inputStyle,
        containerStyle,
        wrapperStyle,
        dividerStyle,
        // TextInput props
        secureTextEntry,
        onFocus,
        onBlur,
        placeholderTextColor,
        textAlign,
        ...textInputProps
    } = props;

    const [isFocused, setIsFocused] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);

    // In spaced mode, each item is a separate card (no dividers)
    const effectiveLastItem = spaced || lastItem;

    // Expose ref methods
    useImperativeHandle(ref, () => ({
        focus: () => inputRef.current?.focus(),
        blur: () => inputRef.current?.blur(),
        clear: () => inputRef.current?.clear(),
        isFocused: () => inputRef.current?.isFocused() ?? false
    }));

    const handleFocus = (e: any) => {
        setIsFocused(true);
        onFocus?.(e);
    };

    const handleBlur = (e: any) => {
        setIsFocused(false);
        onBlur?.(e);
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    // Determine if we should hide the text (password mode)
    const shouldHideText = secureTextEntry && !passwordVisible;

    const styles = {
        container: {} as ViewStyle,
        containerSpaced: {
            borderRadius: tokens.listItemRadius,
            overflow: 'hidden' as const
        },
        wrapper: {
            paddingTop: tokens.spacingSm,
            paddingRight: tokens.listItemPaddingRight,
            paddingBottom: tokens.spacingSm,
            backgroundColor: 'transparent',
            minHeight: tokens.listItemMinHeight,
            borderBottomWidth: StyleSheet.hairlineWidth,
            marginLeft: tokens.listItemMarginLeft
        },
        // Inline mode: horizontal layout like List.Item
        wrapperInline: {
            flexDirection: 'row' as const,
            alignItems: 'center' as const,
            paddingTop: tokens.listItemPaddingVertical,
            paddingBottom: tokens.listItemPaddingVertical
        },
        label: {
            fontSize: tokens.fontSizeXs + 1,
            fontWeight: tokens.fontWeightNormal,
            marginBottom: tokens.spacingXs - 2
        } as TextStyle,
        // Inline mode: label looks like List.Item title
        labelInline: {
            fontSize: tokens.fontSizeMd + 0.5,
            fontWeight: tokens.fontWeightNormal,
            marginBottom: 0,
            marginRight: tokens.spacingSm
        } as TextStyle,
        labelFocused: {
            color: colors.primary
        } as TextStyle,
        inputRow: {
            flexDirection: 'row' as const,
            alignItems: 'center' as const
        },
        // Inline mode: input row takes remaining space
        inputRowInline: {
            flex: 1,
            justifyContent: 'flex-end' as const
        },
        input: {
            flex: 1,
            fontSize: tokens.fontSizeMd + 0.5,
            fontWeight: tokens.fontWeightNormal,
            color: colors.textPrimary,
            padding: 0,
            margin: 0,
            minHeight: 28,
            ...Platform.select({
                android: {
                    paddingVertical: 0
                }
            })
        } as TextStyle,
        // Inline mode: input is right-aligned
        inputInline: {
            textAlign: 'right' as const
        } as TextStyle,
        rightLabelText: {
            fontSize: tokens.fontSizeMd + 0.5,
            fontWeight: tokens.fontWeightNormal,
            color: colors.textSecondary,
            marginLeft: tokens.spacingSm
        } as TextStyle,
        passwordToggle: {
            paddingLeft: tokens.spacingSm,
            paddingVertical: tokens.spacingXs
        }
    };

    return (
        <View
            style={[
                styles.container,
                spaced && styles.containerSpaced,
                { backgroundColor: colors.listItemBackground },
                containerStyle,
                disabled && { opacity: 0.5 }
            ]}
        >
            <View
                style={[
                    styles.wrapper,
                    inline && styles.wrapperInline,
                    { borderBottomColor: colors.listItemBorder },
                    effectiveLastItem && { borderBottomWidth: 0 },
                    dividerStyle,
                    wrapperStyle
                ]}
            >
                {label && (
                    <Text
                        style={[
                            styles.label,
                            inline && styles.labelInline,
                            { color: inline ? colors.textPrimary : colors.textTertiary },
                            isFocused && styles.labelFocused,
                            labelStyle
                        ]}
                        numberOfLines={1}
                    >
                        {label}{required ? ' *' : ''}
                    </Text>
                )}

                <View style={[styles.inputRow, inline && styles.inputRowInline]}>
                    <TextInput
                        ref={inputRef}
                        style={[
                            styles.input,
                            inline && styles.inputInline,
                            inputStyle
                        ]}
                        textAlign={textAlign ?? (inline ? 'right' : 'left')}
                        editable={!disabled}
                        secureTextEntry={shouldHideText}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        placeholderTextColor={placeholderTextColor ?? colors.textHint}
                        {...textInputProps}
                    />

                    {rightLabel && (
                        <Text style={[styles.rightLabelText, rightLabelStyle]}>
                            {rightLabel}
                        </Text>
                    )}

                    {showPasswordToggle && secureTextEntry && (
                        <Pressable
                            onPress={togglePasswordVisibility}
                            style={styles.passwordToggle}
                            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                            accessibilityRole="button"
                            accessibilityLabel={passwordVisible ? 'Hide password' : 'Show password'}
                        >
                            {passwordVisible ? (
                                <Eye
                                    width={passwordToggleSize}
                                    height={passwordToggleSize}
                                    fill={colors.textPrimary}
                                />
                            ) : (
                                <EyeOff
                                    width={passwordToggleSize}
                                    height={passwordToggleSize}
                                    fill={colors.textHint}
                                />
                            )}
                        </Pressable>
                    )}
                </View>
            </View>
        </View>
    );
});

ListInputItemComponent.displayName = 'ListInputItem';

export const ListInputItem = memo(ListInputItemComponent);
