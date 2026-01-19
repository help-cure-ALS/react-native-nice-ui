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
exports.Close = Close;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_svg_1 = __importStar(require("react-native-svg"));
function Close(props) {
    return ((0, jsx_runtime_1.jsx)(react_native_svg_1.default, { viewBox: "0 0 28 28", ...props, children: (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { d: "M14,0 C21.7319865,0 28,6.2680135 28,14 C28,21.7319865 21.7319865,28 14,28 C6.2680135,28 0,21.7319865 0,14 C0,6.2680135 6.2680135,0 14,0 Z M19.0463616,8.76677663 C18.5701897,8.38371275 17.8718795,8.4131792 17.4298827,8.85517598 L17.4298827,8.85517598 L14,12.285 L10.5701173,8.85517598 C10.0965493,8.38160801 9.32874396,8.38160801 8.85517598,8.85517598 C8.38160801,9.32874396 8.38160801,10.0965493 8.85517598,10.5701173 L8.85517598,10.5701173 L12.285,14 L8.85517598,17.4298827 L8.76677663,17.5283451 C8.38371275,18.004517 8.4131792,18.7028272 8.85517598,19.144824 L8.85517598,19.144824 L8.95363838,19.2332234 C9.42981029,19.6162872 10.1281205,19.5868208 10.5701173,19.144824 L10.5701173,19.144824 L14,15.715 L17.4298827,19.144824 C17.9034507,19.618392 18.671256,19.618392 19.144824,19.144824 C19.618392,18.671256 19.618392,17.9034507 19.144824,17.4298827 L19.144824,17.4298827 L15.715,14 L19.144824,10.5701173 L19.2332234,10.4716549 C19.6162872,9.99548302 19.5868208,9.29717276 19.144824,8.85517598 L19.144824,8.85517598 Z", "fill-rule": "evenodd" }) }));
}
