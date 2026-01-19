import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
const ListWrapper = memo((props) => {
    const { children, rounded = false, containerStyle } = props;
    return (<View style={[styles.wrapper, rounded && styles.wrapperRounded, containerStyle]}>
            {children}
        </View>);
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
