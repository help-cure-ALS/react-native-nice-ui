import React, { createContext, useContext, useMemo } from 'react';
import { lightUIColors, darkUIColors } from './colors.ui';
const ThemeContext = createContext(undefined);
export function UIThemeProvider({ themeName, colors, children }) {
    const value = useMemo(() => {
        const isDark = themeName === 'dark';
        const defaults = isDark ? darkUIColors : lightUIColors;
        // Option 1: UI defaults + injected colors (App wins)
        const merged = { ...defaults, ...(colors !== null && colors !== void 0 ? colors : {}) };
        return { themeName, isDark, colors: merged };
    }, [themeName, colors]);
    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
export function useTheme() {
    const ctx = useContext(ThemeContext);
    if (!ctx)
        throw new Error('useTheme must be used within UIThemeProvider');
    return ctx;
}
