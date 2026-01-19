import React, { createContext, useContext, ReactNode, useMemo } from 'react';
import { lightUIColors, darkUIColors } from './colors.ui';
import type { UIColors } from './colors.types';

export type ThemeName = 'light' | 'dark';

export interface UIThemeContextType {
    themeName: ThemeName;
    colors: UIColors;
    isDark: boolean;
}

const ThemeContext = createContext<UIThemeContextType | undefined>(undefined);

export function UIThemeProvider({
                                    themeName,
                                    colors,
                                    children
                                }: {
    themeName: ThemeName;
    colors?: Partial<UIColors>; // optional: allow partial override
    children: ReactNode;
}) {
    const value = useMemo<UIThemeContextType>(() => {
        const isDark = themeName === 'dark';
        const defaults = isDark ? darkUIColors : lightUIColors;

        // Option 1: UI defaults + injected colors (App wins)
        const merged: UIColors = { ...defaults, ...(colors ?? {}) };

        return { themeName, isDark, colors: merged };
    }, [themeName, colors]);

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): UIThemeContextType {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error('useTheme must be used within UIThemeProvider');
    return ctx;
}
