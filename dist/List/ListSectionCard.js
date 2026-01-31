import React, { memo, Children, isValidElement, cloneElement } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../theme';
export const ListSectionCard = memo(({ header, title, body, titleCmp, rounded = true, style, containerStyle, headerStyle, headerAreaStyle, titleStyle, bodyStyle, contentStyle, children, }) => {
    const { colors, tokens } = useTheme();
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
    const styles = {
        outer: {
            marginHorizontal: tokens.listSectionPaddingHorizontal,
            marginVertical: tokens.spacingSm
        },
        container: {
            overflow: 'hidden'
        },
        rounded: {
            borderRadius: tokens.radiusMd
        },
        headerArea: {
            paddingHorizontal: tokens.spacingLg,
            paddingTop: tokens.listItemPaddingVertical + 2,
            paddingBottom: tokens.listItemPaddingVertical + 2,
            backgroundColor: colors.listItemBackground
        },
        header: {
            fontSize: tokens.fontSizeXs + 1,
            fontWeight: tokens.fontWeightMedium,
            marginBottom: tokens.spacingXs,
            color: colors.textTertiary
        },
        title: {
            fontSize: tokens.fontSizeLg,
            fontWeight: tokens.fontWeightBold,
            lineHeight: tokens.lineHeightMd,
            paddingBottom: tokens.spacingXs + 1,
            color: colors.textPrimary
        },
        bodyText: {
            fontSize: tokens.fontSizeLg,
            fontWeight: tokens.fontWeightNormal,
            lineHeight: tokens.lineHeightMd,
            color: colors.textSecondary
        },
        content: {
            borderTopWidth: StyleSheet.hairlineWidth,
            borderTopColor: colors.listItemBorder
        }
    };
    return (<View style={[styles.outer, style]}>
            <View style={[styles.container, rounded && styles.rounded, containerStyle]}>
                {/* Header & Title Area */}
                {(header || title || titleCmp) && (<View style={[styles.headerArea, headerAreaStyle]}>
                        {header && (<Text style={[styles.header, headerStyle]}>
                                {header}
                            </Text>)}
                        {titleCmp ? titleCmp : title && (<Text style={[styles.title, titleStyle]}>
                                {title}
                            </Text>)}
                        {body && (<Text style={[styles.bodyText, bodyStyle]}>
                                {body}
                            </Text>)}
                    </View>)}

                {/* Content/Children Area */}
                {enhancedChildren.length > 0 && (<View style={[styles.content, contentStyle]}>
                        {enhancedChildren}
                    </View>)}
            </View>
        </View>);
});
ListSectionCard.displayName = 'ListSectionCard';
