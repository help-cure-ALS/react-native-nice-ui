import React, { ReactNode } from 'react';
import type { UIColors } from './colors.types';
import type { UITokens } from './tokens.types';
export type ThemeName = 'light' | 'dark';
export interface UIThemeContextType {
    themeName: ThemeName;
    colors: UIColors;
    tokens: UITokens;
    isDark: boolean;
}
export declare function UIThemeProvider({ themeName, colors, tokens, children }: {
    themeName: ThemeName;
    colors?: Partial<UIColors>;
    tokens?: Partial<UITokens>;
    children: ReactNode;
}): React.JSX.Element;
export declare function useTheme(): UIThemeContextType;
