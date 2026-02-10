import React, { memo } from 'react';
import { View, Text, StyleSheet, StyleProp, ViewStyle, TextStyle } from 'react-native';

import { useTheme } from '../theme';

export type BadgeVariant = 'success' | 'warning' | 'error' | 'info' | 'default';
export type BadgeSize = 'small' | 'medium';

export type BadgeProps = {
    label: string;
    variant?: BadgeVariant;
    size?: BadgeSize;
    /** Custom background color (overrides variant) */
    color?: string;
    /** Custom text color (overrides variant) */
    textColor?: string;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
};

const VARIANT_COLORS: Record<BadgeVariant, { background: string; text: string }> = {
    success: { background: '#34C759', text: '#ffffff' },
    warning: { background: '#FF9500', text: '#ffffff' },
    error: { background: '#FF3B30', text: '#ffffff' },
    info: { background: '#007AFF', text: '#ffffff' },
    default: { background: '#8E8E93', text: '#ffffff' }
};

const Badge = memo<BadgeProps>((props) => {
    const { colors } = useTheme();
    const {
        label,
        variant = 'default',
        size = 'medium',
        color,
        textColor,
        style,
        textStyle
    } = props;

    const variantColors = VARIANT_COLORS[variant] ?? VARIANT_COLORS.default;
    const bg = color ?? variantColors.background;
    const fg = textColor ?? variantColors.text;

    const isSmall = size === 'small';

    return (
        <View
            style={[
                styles.container,
                {
                    backgroundColor: bg,
                    paddingHorizontal: isSmall ? 6 : 8,
                    paddingVertical: isSmall ? 2 : 3,
                    borderRadius: isSmall ? 4 : 5
                },
                style
            ]}
        >
            <Text
                style={[
                    styles.text,
                    {
                        color: fg,
                        fontSize: isSmall ? 10 : 12,
                        fontWeight: '600'
                    },
                    textStyle
                ]}
                numberOfLines={1}
            >
                {label}
            </Text>
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        alignSelf: 'flex-start'
    },
    text: {
        textAlign: 'center'
    }
});

export { Badge };
