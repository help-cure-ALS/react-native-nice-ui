"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isIOSVersionOrHigher = isIOSVersionOrHigher;
const react_native_1 = require("react-native");
function isIOSVersionOrHigher(minVersion) {
    if (react_native_1.Platform.OS !== 'ios')
        return false;
    const v = react_native_1.Platform.Version;
    const major = typeof v === 'number'
        ? v
        : Number(String(v).split('.')[0]); // falls mal "17.2" o.ä.
    return Number.isFinite(major) && major >= minVersion;
}
