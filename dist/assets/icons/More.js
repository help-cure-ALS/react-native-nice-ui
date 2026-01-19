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
exports.More = More;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_svg_1 = __importStar(require("react-native-svg"));
function More(props) {
    return ((0, jsx_runtime_1.jsx)(react_native_svg_1.default, { viewBox: "0 0 28 28", ...props, children: (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { d: "M14,0 C21.6275002,0 27.8303269,6.09809795 27.996578,13.6872879 L28,14 C28,21.6275002 21.901902,27.8303269 14.3127121,27.996578 L14,28 C6.2680135,28 0,21.7336865 0,14 C0,6.37249981 6.09809795,0.169673114 13.6872879,0.00342204548 L14,0 Z M8,12 C6.8954305,12 6,12.8954305 6,14 C6,15.1045695 6.8954305,16 8,16 C9.1045695,16 10,15.1045695 10,14 C10,12.8954305 9.1045695,12 8,12 Z M14,12 C12.8954305,12 12,12.8954305 12,14 C12,15.1045695 12.8954305,16 14,16 C15.1045695,16 16,15.1045695 16,14 C16,12.8954305 15.1045695,12 14,12 Z M20,12 C18.8954305,12 18,12.8954305 18,14 C18,15.1045695 18.8954305,16 20,16 C21.1045695,16 22,15.1045695 22,14 C22,12.8954305 21.1045695,12 20,12 Z", "fill-rule": "evenodd" }) }));
}
