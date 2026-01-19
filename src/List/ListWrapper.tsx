import React, { memo, ReactNode } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

export type ListWrapperProps = {
    children?: ReactNode;
    rounded?: boolean;
    containerStyle?: StyleProp<ViewStyle>;
};

const ListWrapper = memo<ListWrapperProps>((props) => {
    const { children, rounded = false, containerStyle } = props;

    return (
        <View style={[styles.wrapper, rounded && styles.wrapperRounded, containerStyle]}>
            {children}
        </View>
    );
});

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: 18
    },
    wrapperRounded: {
        paddingHorizontal: 34
    }
});

export { ListWrapper };
