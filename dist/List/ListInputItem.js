import React, { memo, useState, useRef, forwardRef, useImperativeHandle } from 'react';
import { Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Eye, EyeOff } from '../assets/icons';
import { useTheme } from '../theme';
import { useListContext } from './List';
const ListInputItemComponent = forwardRef((props, ref) => {
    const { colors, tokens } = useTheme();
    const { spaced } = useListContext();
    const inputRef = useRef(null);
    const { 
    // List-specific props
    label, rightLabel, required = false, inline = false, showPasswordToggle = false, passwordToggleSize = 22, disabled = false, lastItem = false, labelStyle, rightLabelStyle, inputStyle, containerStyle, wrapperStyle, dividerStyle, 
    // TextInput props
    secureTextEntry, onFocus, onBlur, placeholderTextColor, textAlign, ...textInputProps } = props;
    const [isFocused, setIsFocused] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    // In spaced mode, each item is a separate card (no dividers)
    const effectiveLastItem = spaced || lastItem;
    // Expose ref methods
    useImperativeHandle(ref, () => ({
        focus: () => { var _a; return (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus(); },
        blur: () => { var _a; return (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.blur(); },
        clear: () => { var _a; return (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.clear(); },
        isFocused: () => { var _a, _b; return (_b = (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.isFocused()) !== null && _b !== void 0 ? _b : false; }
    }));
    const handleFocus = (e) => {
        setIsFocused(true);
        onFocus === null || onFocus === void 0 ? void 0 : onFocus(e);
    };
    const handleBlur = (e) => {
        setIsFocused(false);
        onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
    };
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    // Determine if we should hide the text (password mode)
    const shouldHideText = secureTextEntry && !passwordVisible;
    const styles = {
        container: {},
        containerSpaced: {
            borderRadius: tokens.listItemRadius,
            overflow: 'hidden'
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
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: tokens.listItemPaddingVertical,
            paddingBottom: tokens.listItemPaddingVertical
        },
        label: {
            fontSize: tokens.fontSizeXs + 1,
            fontWeight: tokens.fontWeightNormal,
            marginBottom: tokens.spacingXs - 2
        },
        // Inline mode: label looks like List.Item title
        labelInline: {
            fontSize: tokens.fontSizeMd + 0.5,
            fontWeight: tokens.fontWeightNormal,
            marginBottom: 0,
            marginRight: tokens.spacingSm
        },
        labelFocused: {
            color: colors.primary
        },
        inputRow: {
            flexDirection: 'row',
            alignItems: 'center'
        },
        // Inline mode: input row takes remaining space
        inputRowInline: {
            flex: 1,
            justifyContent: 'flex-end'
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
        },
        // Inline mode: input is right-aligned
        inputInline: {
            textAlign: 'right'
        },
        rightLabelText: {
            fontSize: tokens.fontSizeMd + 0.5,
            fontWeight: tokens.fontWeightNormal,
            color: colors.textSecondary,
            marginLeft: tokens.spacingSm
        },
        passwordToggle: {
            paddingLeft: tokens.spacingSm,
            paddingVertical: tokens.spacingXs
        }
    };
    return (<View style={[
            styles.container,
            spaced && styles.containerSpaced,
            { backgroundColor: colors.listItemBackground },
            containerStyle,
            disabled && { opacity: 0.5 }
        ]}>
            <View style={[
            styles.wrapper,
            inline && styles.wrapperInline,
            { borderBottomColor: colors.listItemBorder },
            effectiveLastItem && { borderBottomWidth: 0 },
            dividerStyle,
            wrapperStyle
        ]}>
                {label && (inline ? (<Pressable onPress={() => { var _a; return (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus(); }} disabled={disabled}>
                            <Text style={[
                styles.label,
                styles.labelInline,
                { color: colors.textPrimary },
                isFocused && styles.labelFocused,
                labelStyle
            ]} numberOfLines={1}>
                                {label}{required ? ' *' : ''}
                            </Text>
                        </Pressable>) : (<Text style={[
                styles.label,
                { color: colors.textTertiary },
                isFocused && styles.labelFocused,
                labelStyle
            ]} numberOfLines={1}>
                            {label}{required ? ' *' : ''}
                        </Text>))}

                <View style={[styles.inputRow, inline && styles.inputRowInline]}>
                    <TextInput ref={inputRef} style={[
            styles.input,
            inline && styles.inputInline,
            inputStyle
        ]} textAlign={textAlign !== null && textAlign !== void 0 ? textAlign : (inline ? 'right' : 'left')} editable={!disabled} secureTextEntry={shouldHideText} onFocus={handleFocus} onBlur={handleBlur} placeholderTextColor={placeholderTextColor !== null && placeholderTextColor !== void 0 ? placeholderTextColor : colors.textHint} {...textInputProps}/>

                    {rightLabel && (<Text style={[styles.rightLabelText, rightLabelStyle]}>
                            {rightLabel}
                        </Text>)}

                    {showPasswordToggle && secureTextEntry && (<Pressable onPress={togglePasswordVisibility} style={styles.passwordToggle} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }} accessibilityRole="button" accessibilityLabel={passwordVisible ? 'Hide password' : 'Show password'}>
                            {passwordVisible ? (<Eye width={passwordToggleSize} height={passwordToggleSize} fill={colors.textPrimary}/>) : (<EyeOff width={passwordToggleSize} height={passwordToggleSize} fill={colors.textHint}/>)}
                        </Pressable>)}
                </View>
            </View>
        </View>);
});
ListInputItemComponent.displayName = 'ListInputItem';
export const ListInputItem = memo(ListInputItemComponent);
