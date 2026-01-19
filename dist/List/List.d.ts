import React, { ReactNode } from 'react';
import { ViewProps, StyleProp, ViewStyle, TextStyle } from 'react-native';
export type ListProps = ViewProps & {
    children?: ReactNode;
    rounded?: boolean;
    borders?: boolean;
    title?: string;
    rightCmp?: ReactNode;
    style?: StyleProp<ViewStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    titleStyle?: StyleProp<TextStyle>;
};
declare const List: React.NamedExoticComponent<ListProps>;
export { List };
