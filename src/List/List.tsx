import React, { memo, useMemo, ReactNode, createContext, useContext, Children, isValidElement, cloneElement } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ViewProps,
    StyleProp,
    ViewStyle,
    TextStyle
} from 'react-native';

import { useTheme } from '../theme';

// Context for spaced list layout (card-style items)
interface ListContextType {
    spaced: boolean;
}

const ListContext = createContext<ListContextType>({ spaced: false });

export const useListContext = () => useContext(ListContext);

export type ListProps = ViewProps & {
    children?: ReactNode;
    rounded?: boolean;
    borders?: boolean;
    /** Card-style layout with gap between items. Each item gets rounded corners automatically. */
    spaced?: boolean;
    /** Gap size between items when spaced is true. Uses tokens.listSpacedGap by default. */
    spacing?: number;
    title?: string;
    rightCmp?: ReactNode;

    style?: StyleProp<ViewStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    titleStyle?: StyleProp<TextStyle>;
};

const List = memo<ListProps>((props) => {
    const { colors, tokens, isDark, customStyles } = useTheme();

    const {
        children,
        rounded = false,
        borders = true,
        spaced = false,
        spacing,
        containerStyle,
        title,
        titleStyle,
        rightCmp,
        style,
        ...attributes
    } = props;

    // Use provided spacing or default from tokens
    const effectiveSpacing = spacing ?? tokens.listSpacedGap;

    // When spaced, disable borders (each item has its own)
    const effectiveBorders = spaced ? false : borders;

    const containerBorders: ViewStyle = effectiveBorders
        ? rounded
            ? { borderWidth: StyleSheet.hairlineWidth, borderColor: colors.border }
            : {
                borderTopWidth: StyleSheet.hairlineWidth,
                borderBottomWidth: StyleSheet.hairlineWidth,
                borderColor: colors.border
            }
        : {};

    const spacedStyle: ViewStyle = spaced ? { gap: effectiveSpacing } : {};

    const contextValue = useMemo(() => ({ spaced }), [spaced]);

    // Automatically set lastItem on the last valid child
    const childArray = Children.toArray(children).filter(isValidElement);
    const lastIndex = childArray.length - 1;

    const enhancedChildren = childArray.map((child, index) => {
        if (isValidElement(child)) {
            return cloneElement(child as React.ReactElement<{ lastItem?: boolean }>, {
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
            overflow: 'hidden' as const
        },
        titleWrapper: {
            marginTop: 5,
            paddingRight: tokens.listItemPaddingRight,
            paddingBottom: tokens.listItemPaddingVertical,
            flexDirection: 'row' as const,
            paddingLeft: tokens.listItemMarginLeft
        },
        rightContainer: {
            alignItems: 'flex-end' as const,
            marginLeft: tokens.spacingMd,
            minWidth: 24
        },
        title: {
            flex: 1,
            alignSelf: 'center' as const,
            fontSize: tokens.fontSizeLg,
            fontWeight: tokens.fontWeightMedium
        }
    };

    return (
        <ListContext.Provider value={contextValue}>
            <View style={[styles.wrapper, (rounded || spaced) && styles.wrapperRounded, style]}>
                {(title || rightCmp) && (
                    <View style={styles.titleWrapper}>
                        {!!title && (
                            <Text
                                style={[
                                    styles.title,
                                    { color: colors.textTertiary },
                                    customStyles.listSectionTitle?.({ colors, tokens, isDark }),
                                    titleStyle
                                ]}
                                numberOfLines={1}
                            >
                                {title}
                            </Text>
                        )}
                        {!!rightCmp && <View style={styles.rightContainer}>{rightCmp}</View>}
                    </View>
                )}

                <View
                    {...attributes}
                    style={[
                        rounded && styles.containerRounded,
                        containerBorders,
                        spacedStyle,
                        containerStyle
                    ]}
                >
                    {enhancedChildren}
                </View>
            </View>
        </ListContext.Provider>
    );
});

export { List };
