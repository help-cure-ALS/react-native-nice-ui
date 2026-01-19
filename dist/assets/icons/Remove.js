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
exports.Remove = Remove;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_svg_1 = __importStar(require("react-native-svg"));
function Remove(props) {
    return ((0, jsx_runtime_1.jsx)(react_native_svg_1.default, { viewBox: "0 0 28 28", ...props, children: (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { d: "M14,0 C17.71136,0.00384 21.27008,1.48 23.89504,4.10496 C26.52,6.72992 27.9962499,10.28864 28,14 C28,17.71264 26.525152,21.27392 23.90016,23.90016 C21.2736,26.524992 17.71264,28 14,28 C10.28736,28 6.72608,26.525152 4.09984,23.90016 C1.475008,21.2736 0,17.71264 0,14 C0,10.28736 1.474848,6.72608 4.09984,4.09984 C6.7264,1.475008 10.28736,0 14,0 Z M21.75,13 L6.25,13 C5.55964406,13 5,13.5596441 5,14.25 C5,14.9403559 5.55964406,15.5 6.25,15.5 L6.25,15.5 L21.75,15.5 C22.4403559,15.5 23,14.9403559 23,14.25 C23,13.5596441 22.4403559,13 21.75,13 L21.75,13 Z" }) }));
}
