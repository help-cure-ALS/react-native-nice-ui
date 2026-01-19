import React, { memo, useMemo, ReactNode } from 'react';
import {
    Platform,
    StyleProp,
    StyleSheet,
    Text,
    TextStyle,
    View,
    ViewStyle
} from 'react-native';
import { useTheme, UIColors } from '../theme';

export type ListTextProps = {
    children?: ReactNode;
    rounded?: boolean;
    align?: TextStyle['textAlign'];
    containerStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
};

const ListText = memo<ListTextProps>((props) => {
    const { children, rounded = false, align, containerStyle, textStyle } = props;

    const { colors } = useTheme();
    const styles = useMemo(() => createStyles(colors), [colors]);

    return (
        <View style={ [styles.wrapper, rounded && styles.wrapperRounded, containerStyle] }>
            <Text style={ [styles.text, align && { textAlign: align }, textStyle] }>
                { children }
            </Text>
        </View>
    );
});

const createStyles = (colors: UIColors) =>
    StyleSheet.create({
        wrapper: {
            paddingVertical: 18,
            paddingHorizontal: 18
        },
        wrapperRounded: {
            paddingHorizontal: 34
        },
        text: {
            lineHeight: 16,
            color: colors.listText,
            ...Platform.select({
                ios: { fontSize: 13 },
                android: { fontSize: 13, fontWeight: '500' }
            })
        }
    });

export { ListText };
