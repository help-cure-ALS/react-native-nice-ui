import React, { memo, useMemo } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../theme';
const ListText = memo((props) => {
    const { children, rounded = false, align, containerStyle, textStyle } = props;
    const { colors } = useTheme();
    const styles = useMemo(() => createStyles(colors), [colors]);
    return (<View style={[styles.wrapper, rounded && styles.wrapperRounded, containerStyle]}>
            <Text style={[styles.text, align && { textAlign: align }, textStyle]}>
                {children}
            </Text>
        </View>);
});
const createStyles = (colors) => StyleSheet.create({
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
