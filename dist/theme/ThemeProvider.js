import React, { createContext, useContext, useMemo } from 'react';
import { lightUIColors, darkUIColors } from './colors.ui';
import { defaultTokens } from './tokens.defaults';
const ThemeContext = createContext(undefined);
export function UIThemeProvider({ themeName, colors, tokens, children }) {
    const value = useMemo(() => {
        const isDark = themeName === 'dark';
        const colorDefaults = isDark ? darkUIColors : lightUIColors;
        const mergedColors = { ...colorDefaults, ...(colors !== null && colors !== void 0 ? colors : {}) };
        const mergedTokens = { ...defaultTokens, ...(tokens !== null && tokens !== void 0 ? tokens : {}) };
        return { themeName, isDark, colors: mergedColors, tokens: mergedTokens };
    }, [themeName, colors, tokens]);
    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
export function useTheme() {
    const ctx = useContext(ThemeContext);
    if (!ctx)
        throw new Error('useTheme must be used within UIThemeProvider');
    return ctx;
}
