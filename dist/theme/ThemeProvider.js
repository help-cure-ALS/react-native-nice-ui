"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UIThemeProvider = UIThemeProvider;
exports.useTheme = useTheme;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const colors_ui_1 = require("./colors.ui");
const ThemeContext = (0, react_1.createContext)(undefined);
function UIThemeProvider({ themeName, colors, children }) {
    const value = (0, react_1.useMemo)(() => {
        const isDark = themeName === 'dark';
        const defaults = isDark ? colors_ui_1.darkUIColors : colors_ui_1.lightUIColors;
        // Option 1: UI defaults + injected colors (App wins)
        const merged = { ...defaults, ...(colors !== null && colors !== void 0 ? colors : {}) };
        return { themeName, isDark, colors: merged };
    }, [themeName, colors]);
    return (0, jsx_runtime_1.jsx)(ThemeContext.Provider, { value: value, children: children });
}
function useTheme() {
    const ctx = (0, react_1.useContext)(ThemeContext);
    if (!ctx)
        throw new Error('useTheme must be used within UIThemeProvider');
    return ctx;
}
