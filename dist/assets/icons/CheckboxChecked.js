"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckboxChecked = CheckboxChecked;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_svg_1 = __importStar(require("react-native-svg"));
function CheckboxChecked(props) {
    return ((0, jsx_runtime_1.jsx)(react_native_svg_1.default, { viewBox: "0 0 28 28", ...props, children: (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { d: "M14,2 C20.627417,2 26,7.372583 26,14 C26,20.627417 20.627417,26 14,26 C7.372583,26 2,20.627417 2,14 C2,7.372583 7.372583,2 14,2 Z M20.4091575,9.8045212 C20.0213678,9.39849293 19.3926365,9.39849293 19.0048468,9.8045212 L19.0048468,9.8045212 L12.5535048,16.5592832 L9.39515285,13.2523874 C9.00736314,12.8463591 8.3786318,12.8463591 7.99084209,13.2523874 C7.60305238,13.6584156 7.60305238,14.3167175 7.99084209,14.7227458 L7.99084209,14.7227458 L12.5535048,19.5 L20.4091575,11.2748796 C20.7969472,10.8688513 20.7969472,10.2105495 20.4091575,9.8045212 Z", "fill-rule": "evenodd" }) }));
}
