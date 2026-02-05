import React from 'react';
import { TextProps as RNTextProps, StyleProp, TextStyle } from 'react-native';
export type TextVariant = 'displayLarge' | 'displayMedium' | 'displaySmall' | 'headlineLarge' | 'headlineMedium' | 'headlineSmall' | 'titleLarge' | 'titleMedium' | 'titleSmall' | 'bodyLarge' | 'bodyMedium' | 'bodySmall' | 'labelLarge' | 'labelMedium' | 'labelSmall';
export type TextColor = 'primary' | 'secondary' | 'tertiary' | 'hint';
export interface TextProps extends Omit<RNTextProps, 'style'> {
    /** Typography variant (default: bodyMedium) */
    variant?: TextVariant;
    /** Text color based on theme */
    color?: TextColor;
    /** Text alignment */
    align?: TextStyle['textAlign'];
    /** Custom style */
    style?: StyleProp<TextStyle>;
    /** Children */
    children?: React.ReactNode;
}
export declare const Text: React.NamedExoticComponent<TextProps>;
