"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListItem = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_native_1 = require("react-native");
const icons_1 = require("../assets/icons");
const theme_1 = require("../theme");
const platform_1 = require("../platform");
const ListItem = (0, react_1.memo)((props) => {
    const { colors } = (0, theme_1.useTheme)();
    const styles = (0, react_1.useMemo)(() => createStyles(), []);
    const { 
    // text / containers
    title = '', subtitle = null, rightTitle = '', titleStyle, titleContainerStyle, rightTitleStyle, rightTitleContainerStyle, subtitleStyle, wrapperStyle, containerStyle, 
    // content / layout
    titleNumberOfLines = 1, subtitleNumberOfLines = 2, titleCmp = null, leftCmp = null, leftCmpSize, leftCmpStyle, leftCmpWrapperStyle, rightCmp = null, rightCmpStyle, mediaStyle = false, 
    // imagery
    imageSize = 28, imageSource = null, imageAsSvg = null, imageWrapperStyle, imageStyle, 
    // row internals
    titleRowStyle, rightIconContainerStyle, dividerStyle, 
    // affordances
    type = null, checked = null, checkboxSize = 28, hideChevron = false, rightIconSize = 20, rightIconColor = colors.listItemIcon, 
    // behavior
    disabled = false, lastItem = false, onPress, onLongPress, 
    // children
    children } = props;
    const hasLeftCmp = !!leftCmp;
    const hasImageSource = !!imageSource;
    const hasImageSvg = !!imageAsSvg;
    const hasRightTitle = rightTitle !== '';
    const isPressable = !!(onPress || onLongPress);
    const showSubtitle = subtitle !== null && subtitle !== '';
    return ((0, jsx_runtime_1.jsx)(react_native_1.Pressable, { disabled: !isPressable || disabled, onPress: onPress, onLongPress: onLongPress, android_ripple: react_native_1.Platform.OS === 'android' ? { color: colors.listItemBackgroundPress } : undefined, accessibilityRole: type === 'checkbox' ? 'checkbox' : isPressable ? 'button' : 'text', accessibilityState: type === 'checkbox' ? { checked: !!checked, disabled } : { disabled }, style: ({ pressed }) => [
            styles.container,
            { backgroundColor: colors.listItemBackground },
            containerStyle,
            disabled && { opacity: 0.5 },
            pressed && isPressable && !disabled && { backgroundColor: colors.listItemBackgroundPress }
        ], children: (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: [
                styles.wrapper,
                // divider defaults
                { borderBottomColor: colors.listItemBorder },
                lastItem && { borderBottomWidth: 0 },
                dividerStyle,
                wrapperStyle
            ], children: [hasLeftCmp && ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: [
                        styles.leftCmpWrapper,
                        leftCmpSize != null ? { width: leftCmpSize } : undefined,
                        leftCmpWrapperStyle,
                        leftCmpStyle // kept: some callers used this to style the wrapper
                    ], children: leftCmp })), hasImageSource && ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: [styles.imageWrapper, { width: imageSize }, imageWrapperStyle], children: (0, jsx_runtime_1.jsx)(react_native_1.Image, { style: [styles.listItemImage, { width: imageSize, height: imageSize }, imageStyle], source: imageSource }) })), hasImageSvg && ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: [styles.imageWrapper, { width: imageSize }, imageWrapperStyle], children: imageAsSvg })), (0, jsx_runtime_1.jsxs)(react_native_1.View, { style: [styles.titleContainer, titleContainerStyle], children: [(0, jsx_runtime_1.jsxs)(react_native_1.View, { style: [styles.titleRow, titleRowStyle], children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { numberOfLines: titleNumberOfLines, style: [
                                        styles.title,
                                        mediaStyle && styles.titleMediaStyle,
                                        { color: colors.text },
                                        titleStyle
                                    ], children: title }), titleCmp && (0, jsx_runtime_1.jsx)(react_native_1.View, { style: styles.titleCmpContainer, children: titleCmp })] }), showSubtitle && ((0, jsx_runtime_1.jsx)(react_native_1.Text, { numberOfLines: subtitleNumberOfLines, style: [styles.subtitle, { color: colors.textHint }, subtitleStyle], children: subtitle }))] }), hasRightTitle && ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: [styles.rightTitleContainer, rightTitleContainerStyle], children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { numberOfLines: 1, style: [styles.rightTitle, { color: colors.textHint }, rightTitleStyle], children: rightTitle }) })), rightCmp && ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: [styles.rightIconContainer, rightIconContainerStyle, rightCmpStyle], children: rightCmp })), type === 'checkbox' && ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: [styles.rightIconContainer, rightIconContainerStyle], pointerEvents: "none", children: checked ? ((0, jsx_runtime_1.jsx)(icons_1.CheckboxChecked, { width: checkboxSize, height: checkboxSize, fill: colors.primary })) : ((0, jsx_runtime_1.jsx)(icons_1.CheckboxEmpty, { width: checkboxSize, height: checkboxSize, fill: colors.checkboxDisabled })) })), !hideChevron && isPressable && ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: [styles.rightIconContainer, rightIconContainerStyle], pointerEvents: "none", children: (0, jsx_runtime_1.jsx)(icons_1.ArrowRight, { width: rightIconSize, height: rightIconSize, fill: rightIconColor }) })), children] }) }));
});
exports.ListItem = ListItem;
const createStyles = () => react_native_1.StyleSheet.create({
    container: {},
    leftCmpWrapper: {
        marginRight: 15,
        overflow: 'hidden'
    },
    imageWrapper: {
        marginRight: 15,
        overflow: 'hidden'
    },
    listItemImage: {
        borderRadius: 5
    },
    wrapper: {
        paddingTop: 12,
        paddingRight: 10,
        paddingBottom: 12,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        alignItems: 'center',
        minHeight: (0, platform_1.isIOSVersionOrHigher)(26) ? 52 : 48,
        borderBottomWidth: react_native_1.StyleSheet.hairlineWidth,
        ...react_native_1.Platform.select({
            ios: { marginLeft: 18 },
            android: { marginLeft: 20 }
        })
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    titleContainer: {
        flex: 1,
        alignItems: 'flex-start'
    },
    title: {
        fontSize: 16.5,
        fontWeight: '400',
        marginRight: 5
    },
    titleMediaStyle: {
        fontSize: 16.5,
        lineHeight: 22,
        fontWeight: '700'
    },
    titleCmpContainer: {},
    subtitle: {
        marginTop: 3,
        fontSize: 15
    },
    rightTitleContainer: {
        flex: 0,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    rightTitle: {
        marginRight: 5,
        fontSize: 16
    },
    rightIconContainer: {
        alignItems: 'flex-end',
        justifyContent: 'center'
    }
});
