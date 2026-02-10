import React, { ReactNode } from 'react';
import { StyleProp, ViewStyle, TextStyle, ImageStyle, ImageSourcePropType } from 'react-native';
export type ListItemProps = {
    title?: string | ReactNode;
    subtitle?: string | ReactNode | null;
    rightTitle?: string | ReactNode;
    titleStyle?: StyleProp<TextStyle>;
    titleContainerStyle?: StyleProp<ViewStyle>;
    rightTitleStyle?: StyleProp<TextStyle>;
    rightTitleContainerStyle?: StyleProp<ViewStyle>;
    subtitleStyle?: StyleProp<TextStyle>;
    /** Pressable container style */
    containerStyle?: StyleProp<ViewStyle>;
    /** Inner row wrapper style (padding, minHeight, etc.) */
    wrapperStyle?: StyleProp<ViewStyle>;
    titleNumberOfLines?: number;
    subtitleNumberOfLines?: number;
    titleCmp?: ReactNode;
    leftCmp?: ReactNode;
    leftCmpSize?: number;
    /** Style for the *content* inside the leftCmp wrapper (kept for backward compatibility) */
    leftCmpStyle?: StyleProp<ViewStyle>;
    /** Style for the leftCmp wrapper container itself (marginRight, align, etc.) */
    leftCmpWrapperStyle?: StyleProp<ViewStyle>;
    rightCmp?: ReactNode;
    rightCmpStyle?: StyleProp<ViewStyle>;
    mediaStyle?: boolean;
    imageSize?: number;
    imageSource?: ImageSourcePropType | null;
    imageAsSvg?: ReactNode | null;
    /** Wrapper around image/svg (marginRight, align, etc.) */
    imageWrapperStyle?: StyleProp<ViewStyle>;
    /** Style for the Image component itself (borderRadius, resizeMode via style, etc.) */
    imageStyle?: StyleProp<ImageStyle>;
    /** Style for the row that contains title + titleCmp */
    titleRowStyle?: StyleProp<ViewStyle>;
    /** Style for the right icon/affordance container (chevron/checkbox/rightCmp) */
    rightIconContainerStyle?: StyleProp<ViewStyle>;
    /** Style applied to the divider (borderBottom*) */
    dividerStyle?: StyleProp<ViewStyle>;
    /** Badge element (e.g. <Badge label="Aktiv" variant="success" />) */
    badge?: ReactNode;
    /** Badge position: 'right' (default), 'inline' (next to title), or 'top-right' (absolute corner) */
    badgePosition?: 'inline' | 'right' | 'top-right';
    /** Style for the badge wrapper (e.g. override top/right for 'top-right') */
    badgeStyle?: StyleProp<ViewStyle>;
    type?: 'checkbox' | null;
    checked?: boolean | null;
    checkboxSize?: number;
    hideChevron?: boolean;
    rightIconSize?: number;
    rightIconColor?: string;
    disabled?: boolean;
    lastItem?: boolean;
    onPress?: (() => void) | undefined;
    onLongPress?: (() => void) | undefined;
    children?: ReactNode;
};
declare const ListItem: React.NamedExoticComponent<ListItemProps>;
export { ListItem };
