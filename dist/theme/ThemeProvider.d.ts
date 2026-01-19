import { ReactNode } from 'react';
import type { UIColors } from './colors.types';
export type ThemeName = 'light' | 'dark';
export interface UIThemeContextType {
    themeName: ThemeName;
    colors: UIColors;
    isDark: boolean;
}
export declare function UIThemeProvider({ themeName, colors, children }: {
    themeName: ThemeName;
    colors?: Partial<UIColors>;
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export declare function useTheme(): UIThemeContextType;
