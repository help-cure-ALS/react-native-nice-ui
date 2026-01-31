import React, { memo, ReactNode } from 'react';
import { StyleProp, TextStyle, ViewProps, ViewStyle } from 'react-native';

import { List } from './List';

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

const ListSection = memo<ListSectionProps>((props) => {
    const {
        title,
        rightCmp,
        rounded = false,
        borders = true,
        spaced = false,
        spacing,
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
            spaced={spaced}
            spacing={spacing}
            style={style}
            containerStyle={containerStyle}
            titleStyle={titleStyle}
        >
            {children}
        </List>
    );
});

export { ListSection };
