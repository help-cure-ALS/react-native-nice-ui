import React, { ReactNode } from 'react';
import { StyleProp, ViewStyle, TextStyle } from 'react-native';
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
declare const Button: React.NamedExoticComponent<ButtonProps>;
export { Button };
