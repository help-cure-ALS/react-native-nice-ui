"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListWrapper = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_native_1 = require("react-native");
const ListWrapper = (0, react_1.memo)((props) => {
    const { children, rounded = false, containerStyle } = props;
    return ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: [styles.wrapper, rounded && styles.wrapperRounded, containerStyle], children: children }));
});
exports.ListWrapper = ListWrapper;
const styles = react_native_1.StyleSheet.create({
    wrapper: {
        paddingHorizontal: 18
    },
    wrapperRounded: {
        paddingHorizontal: 34
    }
});
