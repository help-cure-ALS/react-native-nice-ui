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
exports.DragHandler = DragHandler;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_svg_1 = __importStar(require("react-native-svg"));
function DragHandler(props) {
    return ((0, jsx_runtime_1.jsx)(react_native_svg_1.default, { viewBox: "0 0 28 28", ...props, children: (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { d: "M24.5,20 C25.3284271,20 26,20.6715729 26,21.5 C26,22.3284271 25.3284271,23 24.5,23 L3.5,23 C2.67157288,23 2,22.3284271 2,21.5 C2,20.6715729 2.67157288,20 3.5,20 L24.5,20 Z M24.5,13 C25.3284271,13 26,13.6715729 26,14.5 C26,15.3284271 25.3284271,16 24.5,16 L3.5,16 C2.67157288,16 2,15.3284271 2,14.5 C2,13.6715729 2.67157288,13 3.5,13 L24.5,13 Z M24.5,6 C25.3284271,6 26,6.67157288 26,7.5 C26,8.32842712 25.3284271,9 24.5,9 L3.5,9 C2.67157288,9 2,8.32842712 2,7.5 C2,6.67157288 2.67157288,6 3.5,6 L24.5,6 Z", "fill-rule": "evenodd" }) }));
}
