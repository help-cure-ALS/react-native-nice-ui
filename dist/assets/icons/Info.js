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
exports.Info = Info;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_svg_1 = __importStar(require("react-native-svg"));
function Info(props) {
    return ((0, jsx_runtime_1.jsx)(react_native_svg_1.default, { viewBox: "0 0 28 28", ...props, children: (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { d: "M14,0 C17.71136,0.00384 21.27008,1.48 23.89504,4.10496 C26.52,6.72992 27.9962499,10.28864 28,14 C28,17.71264 26.525152,21.27392 23.90016,23.90016 C21.2736,26.524992 17.71264,28 14,28 C10.28736,28 6.72608,26.525152 4.09984,23.90016 C1.475008,21.2736 0,17.71264 0,14 C0,10.28736 1.474848,6.72608 4.09984,4.09984 C6.7264,1.475008 10.28736,0 14,0 Z M14.6178747,12.1446609 C14.1720983,12.16529 13.6874355,12.2387476 13.3310373,12.4384863 C12.860877,12.7091787 12.4081465,13.0019994 11.9745547,13.3154544 L11.9478542,13.3345739 L11,14.0339356 L11.5229699,15.0643596 L12.9850866,14.0339356 C12.7058969,15.1056152 12.3477602,16.121961 12.0459399,17.1508394 C11.8242107,17.893466 11.6506551,18.6531976 11.5154215,19.4119761 C11.3533062,20.324934 12.0860266,20.8880772 13.0760959,20.6657896 L13.2120602,20.6305684 C13.54929,20.5430223 13.8650482,20.4036562 14.1453969,20.2195065 C15.1054357,19.5392721 16.03534,18.8272749 17,18.1082965 L16.0324478,17.2711247 L13.94458,18.9007402 L13.848227,18.8514332 C14.0740127,18.0982319 14.2940033,17.3419908 14.5215276,16.5923573 C14.8779109,15.4522447 15.2760932,14.3216892 15.6075279,13.1750849 C15.7874581,12.5532111 15.3608352,12.1109532 14.6178747,12.1446609 Z M14.6175631,7 C13.5788206,7 12.7180135,7.86527161 12.7142857,8.91731165 C12.7111423,9.80975728 13.3302216,10.4285714 14.2250843,10.4285714 C15.2473806,10.428526 16.1359103,9.54021098 16.1428571,8.51303003 C16.1428571,7.64598817 15.4966419,7 14.6175631,7 Z" }) }));
}
