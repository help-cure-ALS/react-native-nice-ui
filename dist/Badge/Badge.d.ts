import React from 'react';
import { StyleProp, ViewStyle, TextStyle } from 'react-native';
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
declare const Badge: React.NamedExoticComponent<BadgeProps>;
export { Badge };
