"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.darkUIColors = exports.lightUIColors = exports.useTheme = exports.UIThemeProvider = void 0;
var ThemeProvider_1 = require("./ThemeProvider");
Object.defineProperty(exports, "UIThemeProvider", { enumerable: true, get: function () { return ThemeProvider_1.UIThemeProvider; } });
Object.defineProperty(exports, "useTheme", { enumerable: true, get: function () { return ThemeProvider_1.useTheme; } });
var colors_ui_1 = require("./colors.ui");
Object.defineProperty(exports, "lightUIColors", { enumerable: true, get: function () { return colors_ui_1.lightUIColors; } });
Object.defineProperty(exports, "darkUIColors", { enumerable: true, get: function () { return colors_ui_1.darkUIColors; } });
