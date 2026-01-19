import React, { ReactNode } from 'react';
import { StyleProp, TextStyle, ViewProps, ViewStyle } from 'react-native';
export type ListSectionProps = ViewProps & {
    title?: string;
    rightCmp?: ReactNode;
    rounded?: boolean;
    borders?: boolean;
    style?: StyleProp<ViewStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    titleStyle?: StyleProp<TextStyle>;
    children?: ReactNode;
};
declare const ListSection: React.NamedExoticComponent<ListSectionProps>;
export { ListSection };
