import React, { ReactNode } from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
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
export declare const ListSectionCard: React.NamedExoticComponent<ListSectionCardProps>;
