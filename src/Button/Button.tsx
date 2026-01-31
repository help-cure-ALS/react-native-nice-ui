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

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'success' | 'tinted';
export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonProps = {
    title?: string;
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

    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
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
    const { colors, isDark } = useTheme();
    const styles = useMemo(() => createStyles(), []);

    const {
        title,
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
        style,
        textStyle,
        children
    } = props;

    const isPressable = !!(onPress || onLongPress) && !disabled && !loading;

    const sizeStyles = {
        small: { height: 36, paddingHorizontal: 12, fontSize: 14, iconSize: 36 },
        medium: { height: 44, paddingHorizontal: 16, fontSize: 16, iconSize: 44 },
        large: { height: 52, paddingHorizontal: 20, fontSize: 18, iconSize: 52 }
    };

    const getTintedBackground = () => {
        return isDark ? 'rgba(0, 122, 255, 0.25)' : 'rgba(0, 122, 255, 0.12)';
    };

    const getVariantStyles = (pressed: boolean): { container: ViewStyle; text: TextStyle } => {
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
                        backgroundColor: colors.card,
                        opacity: pressedOpacity
                    },
                    text: { color: colors.text }
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
                        backgroundColor: pressed ? colors.listItemBackgroundPress : 'transparent'
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
                return [
                    styles.container,
                    {
                        height: currentSize.height,
                        width: buttonWidth,
                        paddingHorizontal: buttonPadding,
                        borderRadius: (rounded || iconOnly) ? currentSize.height / 2 : 10
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
                                    <View style={iconOnly ? undefined : styles.iconLeft}>
                                        {leftIcon}
                                    </View>
                                )}
                                {!iconOnly && (title || children) && (
                                    <Text
                                        style={[
                                            styles.text,
                                            { fontSize: currentSize.fontSize },
                                            variantStyles.text,
                                            textStyle
                                        ]}
                                        numberOfLines={1}
                                    >
                                        {children ?? title}
                                    </Text>
                                )}
                                {rightIcon && (
                                    <View style={iconOnly ? undefined : styles.iconRight}>
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
            fontWeight: '600',
            textAlign: 'center'
        },
        iconLeft: {
            marginRight: 8
        },
        iconRight: {
            marginLeft: 8
        },
        disabled: {
            opacity: 0.5
        }
    });

export { Button };
