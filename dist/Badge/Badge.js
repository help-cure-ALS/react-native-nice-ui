import React, { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../theme';
const VARIANT_COLORS = {
    success: { background: '#34C759', text: '#ffffff' },
    warning: { background: '#FF9500', text: '#ffffff' },
    error: { background: '#FF3B30', text: '#ffffff' },
    info: { background: '#007AFF', text: '#ffffff' },
    default: { background: '#8E8E93', text: '#ffffff' }
};
const Badge = memo((props) => {
    var _a;
    const { colors } = useTheme();
    const { label, variant = 'default', size = 'medium', color, textColor, style, textStyle } = props;
    const variantColors = (_a = VARIANT_COLORS[variant]) !== null && _a !== void 0 ? _a : VARIANT_COLORS.default;
    const bg = color !== null && color !== void 0 ? color : variantColors.background;
    const fg = textColor !== null && textColor !== void 0 ? textColor : variantColors.text;
    const isSmall = size === 'small';
    return (<View style={[
            styles.container,
            {
                backgroundColor: bg,
                paddingHorizontal: isSmall ? 6 : 8,
                paddingVertical: isSmall ? 2 : 3,
                borderRadius: isSmall ? 8 : 12
            },
            style
        ]}>
            <Text style={[
            styles.text,
            {
                color: fg,
                fontSize: isSmall ? 10 : 12,
                fontWeight: '600'
            },
            textStyle
        ]} numberOfLines={1}>
                {label}
            </Text>
        </View>);
});
const styles = StyleSheet.create({
    container: {
        alignSelf: 'flex-start',
        flexShrink: 1
    },
    text: {
        textAlign: 'center'
    }
});
export { Badge };
