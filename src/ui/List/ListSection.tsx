import React, { memo, ReactNode } from 'react';
import { StyleProp, TextStyle, ViewProps, ViewStyle } from 'react-native';

import { List } from './List';

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

const ListSection = memo<ListSectionProps>((props) => {
    const {
        title,
        rightCmp,
        rounded = false,
        borders = true,
        style,
        containerStyle,
        titleStyle,
        children,
        ...attributes
    } = props;

    return (
        <List
            {...attributes}
            title={title}
            rightCmp={rightCmp}
            rounded={rounded}
            borders={borders}
            style={style}
            containerStyle={containerStyle}
            titleStyle={titleStyle}
        >
            {children}
        </List>
    );
});

export { ListSection };
