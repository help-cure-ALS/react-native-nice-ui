import React, { memo, ReactNode, Children, isValidElement, cloneElement } from 'react';
import { StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import { useTheme } from '../theme';

export interface ListSectionCardProps {
    /** Small label text above the title (e.g. "Question 1 of 7") */
    header?: string;
    /** Main title text */
    title?: string;
    /** Body text below title */
    body?: string;
    /** Custom title component (replaces title text) */
    titleCmp?: ReactNode;
    /** Rounded corners */
    rounded?: boolean;
    /** Outer container style (margins, etc.) */
    style?: StyleProp<ViewStyle>;
    /** Inner card container style */
    containerStyle?: StyleProp<ViewStyle>;
    /** Header text style */
    headerStyle?: StyleProp<TextStyle>;
    /** Header area style */
    headerAreaStyle?: StyleProp<ViewStyle>;
    /** Title text style */
    titleStyle?: StyleProp<TextStyle>;
    /** Body text style */
    bodyStyle?: StyleProp<TextStyle>;
    /** Content area style */
    contentStyle?: StyleProp<ViewStyle>;
    /** Children - typically List.Item components */
    children?: ReactNode;
}

export const ListSectionCard = memo<ListSectionCardProps>(({
    header,
    title,
    body,
    titleCmp,
    rounded = true,
    style,
    containerStyle,
    headerStyle,
    headerAreaStyle,
    titleStyle,
    bodyStyle,
    contentStyle,
    children,
}) => {
    const { colors, tokens } = useTheme();

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

    const styles = {
        outer: {
            marginHorizontal: tokens.spacingLg,
            marginVertical: tokens.spacingSm
        },
        container: {
            overflow: 'hidden' as const
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
            color: colors.textHint
        } as TextStyle,
        title: {
            fontSize: tokens.fontSizeLg,
            fontWeight: tokens.fontWeightBold,
            lineHeight: tokens.lineHeightMd,
            paddingBottom: tokens.spacingXs + 1,
            color: colors.text
        } as TextStyle,
        bodyText: {
            fontSize: tokens.fontSizeLg,
            fontWeight: tokens.fontWeightNormal,
            lineHeight: tokens.lineHeightMd,
            color: colors.textSecondary
        } as TextStyle,
        content: {
            borderTopWidth: StyleSheet.hairlineWidth,
            borderTopColor: colors.listItemBorder
        }
    };

    return (
        <View style={[styles.outer, style]}>
            <View style={[styles.container, rounded && styles.rounded, containerStyle]}>
                {/* Header & Title Area */}
                {(header || title || titleCmp) && (
                    <View style={[styles.headerArea, headerAreaStyle]}>
                        {header && (
                            <Text style={[styles.header, headerStyle]}>
                                {header}
                            </Text>
                        )}
                        {titleCmp ? titleCmp : title && (
                            <Text style={[styles.title, titleStyle]}>
                                {title}
                            </Text>
                        )}
                        {body && (
                            <Text style={[styles.bodyText, bodyStyle]}>
                                {body}
                            </Text>
                        )}
                    </View>
                )}

                {/* Content/Children Area */}
                {enhancedChildren.length > 0 && (
                    <View style={[styles.content, contentStyle]}>
                        {enhancedChildren}
                    </View>
                )}
            </View>
        </View>
    );
});

ListSectionCard.displayName = 'ListSectionCard';
