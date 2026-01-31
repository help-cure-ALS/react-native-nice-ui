import React, { ReactNode } from 'react';
import { ViewProps, StyleProp, ViewStyle, TextStyle } from 'react-native';
interface ListContextType {
    spaced: boolean;
}
export declare const useListContext: () => ListContextType;
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
declare const List: React.NamedExoticComponent<ListProps>;
export { List };
