import React, { ReactNode } from 'react';
import { ViewStyle, TextStyle } from 'react-native';
import type { UIColors } from './colors.types';
import type { UITokens } from './tokens.types';
export type ThemeName = 'light' | 'dark';
export interface VariantStyleContext {
    pressed: boolean;
    colors: UIColors;
    tokens: UITokens;
    isDark: boolean;
}
export interface VariantStyleResult {
    container: ViewStyle;
    text: TextStyle;
}
export type ButtonVariantStyleFn = (context: VariantStyleContext) => VariantStyleResult;
export type ButtonVariantStyleValue = VariantStyleResult | ButtonVariantStyleFn;
export type CustomVariants = Record<string, ButtonVariantStyleFn>;
export interface CustomStyleContext {
    colors: UIColors;
    tokens: UITokens;
    isDark: boolean;
}
export type CustomStyleFn = (context: CustomStyleContext) => TextStyle;
export interface CustomStyles {
    listSectionTitle?: CustomStyleFn;
    listItemTitle?: CustomStyleFn;
    listItemSubtitle?: CustomStyleFn;
}
export interface UIThemeContextType {
    themeName: ThemeName;
    colors: UIColors;
    tokens: UITokens;
    isDark: boolean;
    customVariants: CustomVariants;
    customStyles: CustomStyles;
}
export declare function UIThemeProvider({ themeName, colors, tokens, customVariants, customStyles, children }: {
    themeName: ThemeName;
    colors?: Partial<UIColors>;
    tokens?: Partial<UITokens>;
    customVariants?: CustomVariants;
    customStyles?: CustomStyles;
    children: ReactNode;
}): React.JSX.Element;
export declare function useTheme(): UIThemeContextType;
