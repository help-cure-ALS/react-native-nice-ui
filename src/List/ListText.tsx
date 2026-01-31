import React, { memo, ReactNode } from 'react';
import {
    Platform,
    StyleProp,
    Text,
    TextStyle,
    View,
    ViewStyle
} from 'react-native';
import { useTheme } from '../theme';

export type ListTextProps = {
    children?: ReactNode;
    rounded?: boolean;
    align?: TextStyle['textAlign'];
    containerStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
};

const ListText = memo<ListTextProps>((props) => {
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
        } as TextStyle
    };

    return (
        <View style={[styles.wrapper, rounded && styles.wrapperRounded, containerStyle]}>
            <Text style={[styles.text, align && { textAlign: align }, textStyle]}>
                {children}
            </Text>
        </View>
    );
});

export { ListText };
