import React, { memo } from 'react';
import { View } from 'react-native';
import { useTheme } from '../theme';
const ListWrapper = memo((props) => {
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
    return (<View style={[styles.wrapper, rounded && styles.wrapperRounded, containerStyle]}>
            {children}
        </View>);
});
export { ListWrapper };
