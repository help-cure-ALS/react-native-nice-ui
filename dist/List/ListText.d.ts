import React, { ReactNode } from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
export type ListTextProps = {
    children?: ReactNode;
    rounded?: boolean;
    align?: TextStyle['textAlign'];
    containerStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
};
declare const ListText: React.NamedExoticComponent<ListTextProps>;
export { ListText };
