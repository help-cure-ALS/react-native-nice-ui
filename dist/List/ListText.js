"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListText = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_native_1 = require("react-native");
const theme_1 = require("../theme");
const ListText = (0, react_1.memo)((props) => {
    const { children, rounded = false, align, containerStyle, textStyle } = props;
    const { colors } = (0, theme_1.useTheme)();
    const styles = (0, react_1.useMemo)(() => createStyles(colors), [colors]);
    return ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: [styles.wrapper, rounded && styles.wrapperRounded, containerStyle], children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { style: [styles.text, align && { textAlign: align }, textStyle], children: children }) }));
});
exports.ListText = ListText;
const createStyles = (colors) => react_native_1.StyleSheet.create({
    wrapper: {
        paddingVertical: 18,
        paddingHorizontal: 18
    },
    wrapperRounded: {
        paddingHorizontal: 34
    },
    text: {
        lineHeight: 16,
        color: colors.listText,
        ...react_native_1.Platform.select({
            ios: { fontSize: 13 },
            android: { fontSize: 13, fontWeight: '500' }
        })
    }
});
