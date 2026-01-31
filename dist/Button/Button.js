import React, { memo, useMemo } from 'react';
import { Pressable, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { useTheme } from '../theme';
// Semantic colors
const COLORS = {
    destructive: '#FF3B30',
    destructiveTinted: 'rgba(255, 59, 48, 0.15)',
    success: '#34C759',
    successTinted: 'rgba(52, 199, 89, 0.15)'
};
const Button = memo((props) => {
    const { colors, tokens, isDark } = useTheme();
    const styles = useMemo(() => createStyles(), []);
    const { title, variant = 'primary', size = 'medium', rounded = false, fullWidth = false, iconOnly = false, disabled = false, loading = false, leftIcon, rightIcon, onPress, onLongPress, style, textStyle, children } = props;
    const isPressable = !!(onPress || onLongPress) && !disabled && !loading;
    const sizeStyles = {
        small: {
            height: tokens.buttonHeightSm,
            paddingHorizontal: tokens.buttonPaddingHorizontalSm,
            fontSize: tokens.fontSizeSm,
            iconSize: tokens.buttonHeightSm
        },
        medium: {
            height: tokens.buttonHeightMd,
            paddingHorizontal: tokens.buttonPaddingHorizontalMd,
            fontSize: tokens.fontSizeMd,
            iconSize: tokens.buttonHeightMd
        },
        large: {
            height: tokens.buttonHeightLg,
            paddingHorizontal: tokens.buttonPaddingHorizontalLg,
            fontSize: tokens.fontSizeXl,
            iconSize: tokens.buttonHeightLg
        }
    };
    const getTintedBackground = () => {
        return isDark ? 'rgba(0, 122, 255, 0.25)' : 'rgba(0, 122, 255, 0.12)';
    };
    const getVariantStyles = (pressed) => {
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
                        backgroundColor: colors.listItemBackground,
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
    return (<Pressable disabled={!isPressable} onPress={onPress} onLongPress={onLongPress} accessibilityRole="button" accessibilityState={{ disabled: disabled || loading }} style={({ pressed }) => {
            const variantStyles = getVariantStyles(pressed && isPressable);
            return [
                styles.container,
                {
                    height: currentSize.height,
                    width: buttonWidth,
                    paddingHorizontal: buttonPadding,
                    borderRadius: (rounded || iconOnly) ? currentSize.height / 2 : tokens.buttonRadius
                },
                fullWidth && styles.fullWidth,
                variantStyles.container,
                (disabled || loading) && styles.disabled,
                style
            ];
        }}>
            {({ pressed }) => {
            const variantStyles = getVariantStyles(pressed && isPressable);
            return (<View style={styles.content}>
                        {loading ? (<ActivityIndicator size="small" color={variantStyles.text.color}/>) : (<>
                                {leftIcon && (<View style={iconOnly ? undefined : { marginRight: tokens.spacingSm }}>
                                        {leftIcon}
                                    </View>)}
                                {!iconOnly && (title || children) && (<Text style={[
                            styles.text,
                            { fontSize: currentSize.fontSize, fontWeight: tokens.fontWeightSemibold },
                            variantStyles.text,
                            textStyle
                        ]} numberOfLines={1}>
                                        {children !== null && children !== void 0 ? children : title}
                                    </Text>)}
                                {rightIcon && (<View style={iconOnly ? undefined : { marginLeft: tokens.spacingSm }}>
                                        {rightIcon}
                                    </View>)}
                            </>)}
                    </View>);
        }}
        </Pressable>);
});
const createStyles = () => StyleSheet.create({
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
    disabled: {
        opacity: 0.5
    }
});
export { Button };
