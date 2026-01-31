import React, { memo } from 'react';
import { Platform, Text, View } from 'react-native';
import { useTheme } from '../theme';
const ListText = memo((props) => {
    const { children, rounded = false, align, containerStyle, textStyle } = props;
    const { colors, tokens } = useTheme();
    const styles = {
        wrapper: {
            paddingVertical: tokens.listItemMarginLeft,
            paddingHorizontal: tokens.listItemMarginLeft
        },
        wrapperRounded: {
            paddingHorizontal: tokens.listItemMarginLeft + tokens.listSectionPaddingHorizontal
        },
        text: {
            lineHeight: tokens.lineHeightXs,
            color: colors.textTertiary,
            fontSize: tokens.fontSizeXs + 1,
            ...(Platform.OS === 'android' && { fontWeight: tokens.fontWeightMedium })
        }
    };
    return (<View style={[styles.wrapper, rounded && styles.wrapperRounded, containerStyle]}>
            <Text style={[styles.text, align && { textAlign: align }, textStyle]}>
                {children}
            </Text>
        </View>);
});
export { ListText };
