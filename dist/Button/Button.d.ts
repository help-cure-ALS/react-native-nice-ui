import React, { ReactNode } from 'react';
import { StyleProp, ViewStyle, TextStyle } from 'react-native';
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
declare const Button: React.NamedExoticComponent<ButtonProps>;
export { Button };
