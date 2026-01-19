"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_native_1 = require("react-native");
const theme_1 = require("../theme");
const platform_1 = require("../platform");
const List = (0, react_1.memo)((props) => {
    const { children, rounded = false, borders = true, containerStyle, title, titleStyle, rightCmp, style, ...attributes } = props;
    const { colors } = (0, theme_1.useTheme)();
    const styles = (0, react_1.useMemo)(() => createStyles(), []);
    const containerBorders = borders
        ? rounded
            ? { borderWidth: react_native_1.StyleSheet.hairlineWidth, borderColor: colors.border }
            : {
                borderTopWidth: react_native_1.StyleSheet.hairlineWidth,
                borderBottomWidth: react_native_1.StyleSheet.hairlineWidth,
                borderColor: colors.border
            }
        : {};
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: [styles.wrapper, rounded && styles.wrapperRounded, style], children: [(title || rightCmp) && ((0, jsx_runtime_1.jsxs)(react_native_1.View, { style: styles.titleWrapper, children: [!!title && ((0, jsx_runtime_1.jsx)(react_native_1.Text, { style: [styles.title, { color: colors.textHint }, titleStyle], numberOfLines: 1, children: title })), !!rightCmp && (0, jsx_runtime_1.jsx)(react_native_1.View, { style: styles.rightContainer, children: rightCmp })] })), (0, jsx_runtime_1.jsx)(react_native_1.View, { ...attributes, style: [
                    rounded && styles.containerRounded,
                    containerBorders,
                    containerStyle
                ], children: children })] }));
});
exports.List = List;
const createStyles = () => react_native_1.StyleSheet.create({
    wrapper: {
        marginTop: 30
    },
    wrapperRounded: {
        paddingHorizontal: 13
    },
    containerRounded: {
        borderRadius: (0, platform_1.isIOSVersionOrHigher)(26) ? 16 : 10,
        overflow: 'hidden'
    },
    titleWrapper: {
        marginTop: 5,
        paddingRight: 10,
        paddingBottom: 12,
        flexDirection: 'row',
        paddingLeft: react_native_1.Platform.OS === 'ios' ? 18 : 20
    },
    rightContainer: {
        alignItems: 'flex-end',
        marginLeft: 10,
        minWidth: 24
    },
    title: {
        flex: 1,
        alignSelf: 'center',
        fontSize: 17,
        fontWeight: '500'
    }
});
