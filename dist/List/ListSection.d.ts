import React, { ReactNode } from 'react';
import { StyleProp, TextStyle, ViewProps, ViewStyle } from 'react-native';
export type ListSectionProps = ViewProps & {
    title?: string;
    rightCmp?: ReactNode;
    rounded?: boolean;
    borders?: boolean;
    /** Card-style layout with gap between items. Each item gets rounded corners automatically. */
    spaced?: boolean;
    /** Gap size between items when spaced is true. Default: 10 */
    spacing?: number;
    style?: StyleProp<ViewStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    titleStyle?: StyleProp<TextStyle>;
    children?: ReactNode;
};
declare const ListSection: React.NamedExoticComponent<ListSectionProps>;
export { ListSection };
