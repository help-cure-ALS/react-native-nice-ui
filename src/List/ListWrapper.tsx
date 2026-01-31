import React, { memo, ReactNode } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { useTheme } from '../theme';

export type ListWrapperProps = {
    children?: ReactNode;
    rounded?: boolean;
    containerStyle?: StyleProp<ViewStyle>;
};

const ListWrapper = memo<ListWrapperProps>((props) => {
    const { children, rounded = false, containerStyle } = props;
    const { tokens } = useTheme();

    const styles = {
        wrapper: {
            paddingHorizontal: tokens.listItemMarginLeft
        },
        wrapperRounded: {
            paddingHorizontal: tokens.listItemMarginLeft + tokens.listSectionPaddingHorizontal
        }
    };

    return (
        <View style={[styles.wrapper, rounded && styles.wrapperRounded, containerStyle]}>
            {children}
        </View>
    );
});

export { ListWrapper };
