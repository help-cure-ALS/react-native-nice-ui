import React, { createContext, useContext, ReactNode, useMemo } from 'react';
import { lightUIColors, darkUIColors } from './colors.ui';
import { defaultTokens } from './tokens.defaults';
import type { UIColors } from './colors.types';
import type { UITokens } from './tokens.types';

export type ThemeName = 'light' | 'dark';

export interface UIThemeContextType {
    themeName: ThemeName;
    colors: UIColors;
    tokens: UITokens;
    isDark: boolean;
}

const ThemeContext = createContext<UIThemeContextType | undefined>(undefined);

export function UIThemeProvider({
    themeName,
    colors,
    tokens,
    children
}: {
    themeName: ThemeName;
    colors?: Partial<UIColors>;
    tokens?: Partial<UITokens>;
    children: ReactNode;
}) {
    const value = useMemo<UIThemeContextType>(() => {
        const isDark = themeName === 'dark';
        const colorDefaults = isDark ? darkUIColors : lightUIColors;

        const mergedColors: UIColors = { ...colorDefaults, ...(colors ?? {}) };
        const mergedTokens: UITokens = { ...defaultTokens, ...(tokens ?? {}) };

        return { themeName, isDark, colors: mergedColors, tokens: mergedTokens };
    }, [themeName, colors, tokens]);

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): UIThemeContextType {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error('useTheme must be used within UIThemeProvider');
    return ctx;
}
