import React, { memo, useMemo, ReactNode } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ViewProps,
    StyleProp,
    ViewStyle,
    TextStyle
} from 'react-native';

import { useTheme } from '../theme';
import { isIOSVersionOrHigher } from '../platform';

export type ListProps = ViewProps & {
    children?: ReactNode;
    rounded?: boolean;
    borders?: boolean;
    title?: string;
    rightCmp?: ReactNode;

    style?: StyleProp<ViewStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    titleStyle?: StyleProp<TextStyle>;
};

const List = memo<ListProps>((props) => {
    const {
        children,
        rounded = false,
        borders = true,
        containerStyle,
        title,
        titleStyle,
        rightCmp,
        style,
        ...attributes
    } = props;

    const { colors } = useTheme();
    const styles = useMemo(() => createStyles(), []);

    const containerBorders: ViewStyle = borders
        ? rounded
            ? { borderWidth: StyleSheet.hairlineWidth, borderColor: colors.border }
            : {
                borderTopWidth: StyleSheet.hairlineWidth,
                borderBottomWidth: StyleSheet.hairlineWidth,
                borderColor: colors.border
            }
        : {};

    return (
        <View style={[styles.wrapper, rounded && styles.wrapperRounded, style]}>
            {(title || rightCmp) && (
                <View style={styles.titleWrapper}>
                    {!!title && (
                        <Text style={[styles.title, { color: colors.textHint }, titleStyle]} numberOfLines={1}>
                            {title}
                        </Text>
                    )}
                    {!!rightCmp && <View style={styles.rightContainer}>{rightCmp}</View>}
                </View>
            )}

            <View
                {...attributes}
                style={[
                    rounded && styles.containerRounded,
                    containerBorders,
                    containerStyle
                ]}
            >
                {children}
            </View>
        </View>
    );
});

const createStyles = () =>
    StyleSheet.create({
        wrapper: {
            marginTop: 30
        },
        wrapperRounded: {
            paddingHorizontal: 13
        },
        containerRounded: {
            borderRadius: isIOSVersionOrHigher(26) ? 16 : 10,
            overflow: 'hidden'
        },
        titleWrapper: {
            marginTop: 5,
            paddingRight: 10,
            paddingBottom: 12,
            flexDirection: 'row',
            paddingLeft: Platform.OS === 'ios' ? 18 : 20
        },
        rightContainer: {
            alignItems: 'flex-end',
            marginLeft: 10,
            minWidth: 24
        },
        title: {
            flex: 1,
            alignSelf: 'center',
            fontSize: 17,
            fontWeight: '500'
        }
    });

export { List };
