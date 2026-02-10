import React, { memo, useMemo, createContext, useContext, Children, isValidElement, cloneElement } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../theme';
const ListContext = createContext({ spaced: false });
export const useListContext = () => useContext(ListContext);
const List = memo((props) => {
    var _a;
    const { colors, tokens, isDark, customStyles } = useTheme();
    const { children, rounded = false, borders = true, spaced = false, spacing, containerStyle, title, titleStyle, rightCmp, style, ...attributes } = props;
    // Use provided spacing or default from tokens
    const effectiveSpacing = spacing !== null && spacing !== void 0 ? spacing : tokens.listSpacedGap;
    // When spaced, disable borders (each item has its own)
    const effectiveBorders = spaced ? false : borders;
    const containerBorders = effectiveBorders
        ? rounded
            ? { borderWidth: StyleSheet.hairlineWidth, borderColor: colors.border }
            : {
                borderTopWidth: StyleSheet.hairlineWidth,
                borderBottomWidth: StyleSheet.hairlineWidth,
                borderColor: colors.border
            }
        : {};
    const spacedStyle = spaced ? { gap: effectiveSpacing } : {};
    const contextValue = useMemo(() => ({ spaced }), [spaced]);
    // Automatically set lastItem on the last valid child
    const childArray = Children.toArray(children).filter(isValidElement);
    const lastIndex = childArray.length - 1;
    const enhancedChildren = childArray.map((child, index) => {
        if (isValidElement(child)) {
            return cloneElement(child, {
                lastItem: index === lastIndex
            });
        }
        return child;
    });
    // Dynamic styles using tokens
    const styles = {
        wrapper: {
            marginTop: tokens.listSectionMarginTop
        },
        wrapperRounded: {
            paddingHorizontal: tokens.listSectionPaddingHorizontal
        },
        containerRounded: {
            borderRadius: tokens.listSectionRadius,
            overflow: 'hidden'
        },
        titleWrapper: {
            marginTop: 5,
            paddingRight: tokens.listItemPaddingRight,
            paddingBottom: tokens.listItemPaddingVertical,
            flexDirection: 'row',
            paddingLeft: tokens.listItemMarginLeft
        },
        rightContainer: {
            alignItems: 'flex-end',
            marginLeft: tokens.spacingMd,
            minWidth: 24
        },
        title: {
            flex: 1,
            alignSelf: 'center',
            fontSize: tokens.fontSizeLg,
            fontWeight: tokens.fontWeightMedium
        }
    };
    return (<ListContext.Provider value={contextValue}>
            <View style={[styles.wrapper, (rounded || spaced) && styles.wrapperRounded, style]}>
                {(title || rightCmp) && (<View style={styles.titleWrapper}>
                        {!!title && (<Text style={[
                    styles.title,
                    { color: colors.textTertiary },
                    (_a = customStyles.listSectionTitle) === null || _a === void 0 ? void 0 : _a.call(customStyles, { colors, tokens, isDark }),
                    titleStyle
                ]} numberOfLines={1}>
                                {title}
                            </Text>)}
                        {!!rightCmp && <View style={styles.rightContainer}>{rightCmp}</View>}
                    </View>)}

                <View {...attributes} style={[
            rounded && styles.containerRounded,
            containerBorders,
            spacedStyle,
            containerStyle
        ]}>
                    {enhancedChildren}
                </View>
            </View>
        </ListContext.Provider>);
});
export { List };
