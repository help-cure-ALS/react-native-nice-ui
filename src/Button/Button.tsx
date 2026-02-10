import React, { memo, useMemo, ReactNode } from 'react';
import {
    Pressable,
    StyleSheet,
    Text,
    View,
    StyleProp,
    ViewStyle,
    TextStyle,
    ActivityIndicator
} from 'react-native';

import { useTheme } from '../theme';
import type { ButtonVariantStyleValue } from '../theme/ThemeProvider';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'success' | 'tinted' | (string & {});
export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonProps = {
    title?: string;
    /** Smaller text below the title */
    subtitle?: string;
    variant?: ButtonVariant;
    size?: ButtonSize;
    /** Fully rounded corners (pill shape) */
    rounded?: boolean;
    /** Button takes full width of container */
    fullWidth?: boolean;
    /** Icon-only button (square/circle, no text) */
    iconOnly?: boolean;

    disabled?: boolean;
    loading?: boolean;

    leftIcon?: ReactNode;
    rightIcon?: ReactNode;

    onPress?: () => void;
    onLongPress?: () => void;

    /** Override or extend the variant styles for this button instance */
    variantStyle?: ButtonVariantStyleValue;

    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    subtitleStyle?: StyleProp<TextStyle>;
    children?: ReactNode;
};

// Semantic colors
const COLORS = {
    destructive: '#FF3B30',
    destructiveTinted: 'rgba(255, 59, 48, 0.15)',
    success: '#34C759',
    successTinted: 'rgba(52, 199, 89, 0.15)'
};

const Button = memo<ButtonProps>((props) => {
    const { colors, tokens, isDark, customVariants } = useTheme();
    const styles = useMemo(() => createStyles(), []);

    const {
        title,
        subtitle,
        variant = 'primary',
        size = 'medium',
        rounded = false,
        fullWidth = false,
        iconOnly = false,
        disabled = false,
        loading = false,
        leftIcon,
        rightIcon,
        onPress,
        onLongPress,
        variantStyle,
        style,
        textStyle,
        subtitleStyle,
        children
    } = props;

    const isPressable = !!(onPress || onLongPress) && !disabled && !loading;

    const sizeStyles = {
        small: {
            height: tokens.buttonHeightSm,
            paddingHorizontal: tokens.buttonPaddingHorizontalSm,
            fontSize: tokens.fontSizeSm,
            subtitleFontSize: tokens.fontSizeXs,
            iconSize: tokens.buttonHeightSm
        },
        medium: {
            height: tokens.buttonHeightMd,
            paddingHorizontal: tokens.buttonPaddingHorizontalMd,
            fontSize: tokens.fontSizeMd,
            subtitleFontSize: tokens.fontSizeSm,
            iconSize: tokens.buttonHeightMd
        },
        large: {
            height: tokens.buttonHeightLg,
            paddingHorizontal: tokens.buttonPaddingHorizontalLg,
            fontSize: tokens.fontSizeXl,
            subtitleFontSize: tokens.fontSizeSm,
            iconSize: tokens.buttonHeightLg
        }
    };

    const getTintedBackground = () => {
        return isDark ? 'rgba(0, 122, 255, 0.25)' : 'rgba(0, 122, 255, 0.12)';
    };

    const getBuiltInVariantStyles = (pressed: boolean): { container: ViewStyle; text: TextStyle } => {
        const pressedOpacity = pressed ? 0.8 : 1;

        switch (variant) {
            case 'primary':
                return {
                    container: {
                        backgroundColor: colors.primary,
                        opacity: pressedOpacity
                    },
                    text: { color: '#ffffff' }
                };
            case 'secondary':
                return {
                    container: {
                        backgroundColor: colors.buttonSecondaryBackground,
                        opacity: pressedOpacity
                    },
                    text: { color: colors.textPrimary }
                };
            case 'outline':
                return {
                    container: {
                        backgroundColor: 'transparent',
                        borderWidth: 1,
                        borderColor: colors.primary,
                        opacity: pressedOpacity
                    },
                    text: { color: colors.primary }
                };
            case 'ghost':
                return {
                    container: {
                        backgroundColor: pressed ? colors.buttonGhostBackgroundPress : 'transparent'
                    },
                    text: { color: colors.primary }
                };
            case 'destructive':
                return {
                    container: {
                        backgroundColor: COLORS.destructive,
                        opacity: pressedOpacity
                    },
                    text: { color: '#ffffff' }
                };
            case 'success':
                return {
                    container: {
                        backgroundColor: COLORS.success,
                        opacity: pressedOpacity
                    },
                    text: { color: '#ffffff' }
                };
            case 'tinted':
                return {
                    container: {
                        backgroundColor: pressed
                            ? isDark ? 'rgba(0, 122, 255, 0.35)' : 'rgba(0, 122, 255, 0.2)'
                            : getTintedBackground()
                    },
                    text: { color: colors.primary }
                };
            default:
                return {
                    container: {},
                    text: {}
                };
        }
    };

    const getVariantStyles = (pressed: boolean): { container: ViewStyle; text: TextStyle } => {
        const ctx = { pressed, colors, tokens, isDark };

        // 1. Built-in or customVariant from provider
        const base = customVariants[variant]
            ? customVariants[variant](ctx)
            : getBuiltInVariantStyles(pressed);

        // 2. Merge with per-instance variantStyle
        if (!variantStyle) return base;

        const override = typeof variantStyle === 'function'
            ? variantStyle(ctx)
            : variantStyle;

        return {
            container: { ...base.container, ...override.container },
            text: { ...base.text, ...override.text }
        };
    };

    const currentSize = sizeStyles[size];

    // For iconOnly, use square dimensions
    const buttonWidth = iconOnly ? currentSize.iconSize : undefined;
    const buttonPadding = iconOnly ? 0 : currentSize.paddingHorizontal;

    return (
        <Pressable
            disabled={!isPressable}
            onPress={onPress}
            onLongPress={onLongPress}
            accessibilityRole="button"
            accessibilityState={{ disabled: disabled || loading }}
            style={({ pressed }) => {
                const variantStyles = getVariantStyles(pressed && isPressable);
                const hasSubtitle = !!subtitle && !iconOnly;
                return [
                    styles.container,
                    {
                        [hasSubtitle ? 'minHeight' : 'height']: currentSize.height,
                        width: buttonWidth,
                        paddingHorizontal: buttonPadding,
                        paddingVertical: hasSubtitle ? tokens.spacingSm : undefined,
                        borderRadius: (rounded || iconOnly) ? currentSize.height / 2 : tokens.buttonRadius
                    },
                    fullWidth && styles.fullWidth,
                    variantStyles.container,
                    (disabled || loading) && styles.disabled,
                    style
                ];
            }}
        >
            {({ pressed }) => {
                const variantStyles = getVariantStyles(pressed && isPressable);
                return (
                    <View style={styles.content}>
                        {loading ? (
                            <ActivityIndicator
                                size="small"
                                color={variantStyles.text.color}
                            />
                        ) : (
                            <>
                                {leftIcon && (
                                    <View style={iconOnly ? undefined : { marginRight: tokens.spacingSm }}>
                                        {leftIcon}
                                    </View>
                                )}
                                {!iconOnly && (title || children) && (
                                    <View style={subtitle ? styles.textColumn : undefined}>
                                        <Text
                                            style={[
                                                styles.text,
                                                { fontSize: currentSize.fontSize, fontWeight: tokens.fontWeightSemibold },
                                                variantStyles.text,
                                                textStyle
                                            ]}
                                            numberOfLines={1}
                                        >
                                            {children ?? title}
                                        </Text>
                                        {!!subtitle && (
                                            <Text
                                                style={[
                                                    styles.text,
                                                    { fontSize: currentSize.subtitleFontSize, opacity: 0.7 },
                                                    variantStyles.text,
                                                    subtitleStyle
                                                ]}
                                                numberOfLines={1}
                                            >
                                                {subtitle}
                                            </Text>
                                        )}
                                    </View>
                                )}
                                {rightIcon && (
                                    <View style={iconOnly ? undefined : { marginLeft: tokens.spacingSm }}>
                                        {rightIcon}
                                    </View>
                                )}
                            </>
                        )}
                    </View>
                );
            }}
        </Pressable>
    );
});

const createStyles = () =>
    StyleSheet.create({
        container: {
            justifyContent: 'center',
            alignItems: 'center'
        },
        fullWidth: {
            width: '100%'
        },
        content: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
        },
        text: {
            textAlign: 'center'
        },
        textColumn: {
            alignItems: 'center'
        },
        disabled: {
            opacity: 0.5
        }
    });

export { Button };
