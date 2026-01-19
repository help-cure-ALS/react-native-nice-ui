import React, { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
export type ListWrapperProps = {
    children?: ReactNode;
    rounded?: boolean;
    containerStyle?: StyleProp<ViewStyle>;
};
declare const ListWrapper: React.NamedExoticComponent<ListWrapperProps>;
export { ListWrapper };
