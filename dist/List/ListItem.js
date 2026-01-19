import React, { memo, useMemo } from 'react';
import { Image, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { ArrowRight, CheckboxEmpty, CheckboxChecked } from '../assets/icons';
import { useTheme } from '../theme';
import { isIOSVersionOrHigher } from '../platform';
const ListItem = memo((props) => {
    const { colors } = useTheme();
    const styles = useMemo(() => createStyles(), []);
    const { 
    // text / containers
    title = '', subtitle = null, rightTitle = '', titleStyle, titleContainerStyle, rightTitleStyle, rightTitleContainerStyle, subtitleStyle, wrapperStyle, containerStyle, 
    // content / layout
    titleNumberOfLines = 1, subtitleNumberOfLines = 2, titleCmp = null, leftCmp = null, leftCmpSize, leftCmpStyle, leftCmpWrapperStyle, rightCmp = null, rightCmpStyle, mediaStyle = false, 
    // imagery
    imageSize = 28, imageSource = null, imageAsSvg = null, imageWrapperStyle, imageStyle, 
    // row internals
    titleRowStyle, rightIconContainerStyle, dividerStyle, 
    // affordances
    type = null, checked = null, checkboxSize = 28, hideChevron = false, rightIconSize = 20, rightIconColor = colors.listItemIcon, 
    // behavior
    disabled = false, lastItem = false, onPress, onLongPress, 
    // children
    children } = props;
    const hasLeftCmp = !!leftCmp;
    const hasImageSource = !!imageSource;
    const hasImageSvg = !!imageAsSvg;
    const hasRightTitle = rightTitle !== '';
    const isPressable = !!(onPress || onLongPress);
    const showSubtitle = subtitle !== null && subtitle !== '';
    return (<Pressable disabled={!isPressable || disabled} onPress={onPress} onLongPress={onLongPress} android_ripple={Platform.OS === 'android' ? { color: colors.listItemBackgroundPress } : undefined} accessibilityRole={type === 'checkbox' ? 'checkbox' : isPressable ? 'button' : 'text'} accessibilityState={type === 'checkbox' ? { checked: !!checked, disabled } : { disabled }} style={({ pressed }) => [
            styles.container,
            { backgroundColor: colors.listItemBackground },
            containerStyle,
            disabled && { opacity: 0.5 },
            pressed && isPressable && !disabled && { backgroundColor: colors.listItemBackgroundPress }
        ]}>
            <View style={[
            styles.wrapper,
            // divider defaults
            { borderBottomColor: colors.listItemBorder },
            lastItem && { borderBottomWidth: 0 },
            dividerStyle,
            wrapperStyle
        ]}>
                {hasLeftCmp && (<View style={[
                styles.leftCmpWrapper,
                leftCmpSize != null ? { width: leftCmpSize } : undefined,
                leftCmpWrapperStyle,
                leftCmpStyle // kept: some callers used this to style the wrapper
            ]}>
                        {leftCmp}
                    </View>)}

                {hasImageSource && (<View style={[styles.imageWrapper, { width: imageSize }, imageWrapperStyle]}>
                        <Image style={[styles.listItemImage, { width: imageSize, height: imageSize }, imageStyle]} source={imageSource}/>
                    </View>)}

                {hasImageSvg && (<View style={[styles.imageWrapper, { width: imageSize }, imageWrapperStyle]}>
                        {imageAsSvg}
                    </View>)}

                <View style={[styles.titleContainer, titleContainerStyle]}>
                    <View style={[styles.titleRow, titleRowStyle]}>
                        <Text numberOfLines={titleNumberOfLines} style={[
            styles.title,
            mediaStyle && styles.titleMediaStyle,
            { color: colors.text },
            titleStyle
        ]}>
                            {title}
                        </Text>

                        {titleCmp && <View style={styles.titleCmpContainer}>{titleCmp}</View>}
                    </View>

                    {showSubtitle && (<Text numberOfLines={subtitleNumberOfLines} style={[styles.subtitle, { color: colors.textHint }, subtitleStyle]}>
                            {subtitle}
                        </Text>)}
                </View>

                {hasRightTitle && (<View style={[styles.rightTitleContainer, rightTitleContainerStyle]}>
                        <Text numberOfLines={1} style={[styles.rightTitle, { color: colors.textHint }, rightTitleStyle]}>
                            {rightTitle}
                        </Text>
                    </View>)}

                {rightCmp && (<View style={[styles.rightIconContainer, rightIconContainerStyle, rightCmpStyle]}>
                        {rightCmp}
                    </View>)}

                {type === 'checkbox' && (<View style={[styles.rightIconContainer, rightIconContainerStyle]} pointerEvents="none">
                        {checked ? (<CheckboxChecked width={checkboxSize} height={checkboxSize} fill={colors.primary}/>) : (<CheckboxEmpty width={checkboxSize} height={checkboxSize} fill={colors.checkboxDisabled}/>)}
                    </View>)}

                {!hideChevron && isPressable && (<View style={[styles.rightIconContainer, rightIconContainerStyle]} pointerEvents="none">
                        <ArrowRight width={rightIconSize} height={rightIconSize} fill={rightIconColor}/>
                    </View>)}

                {children}
            </View>
        </Pressable>);
});
const createStyles = () => StyleSheet.create({
    container: {},
    leftCmpWrapper: {
        marginRight: 15,
        overflow: 'hidden'
    },
    imageWrapper: {
        marginRight: 15,
        overflow: 'hidden'
    },
    listItemImage: {
        borderRadius: 5
    },
    wrapper: {
        paddingTop: 12,
        paddingRight: 10,
        paddingBottom: 12,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        alignItems: 'center',
        minHeight: isIOSVersionOrHigher(26) ? 52 : 48,
        borderBottomWidth: StyleSheet.hairlineWidth,
        ...Platform.select({
            ios: { marginLeft: 18 },
            android: { marginLeft: 20 }
        })
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    titleContainer: {
        flex: 1,
        alignItems: 'flex-start'
    },
    title: {
        fontSize: 16.5,
        fontWeight: '400',
        marginRight: 5
    },
    titleMediaStyle: {
        fontSize: 16.5,
        lineHeight: 22,
        fontWeight: '700'
    },
    titleCmpContainer: {},
    subtitle: {
        marginTop: 3,
        fontSize: 15
    },
    rightTitleContainer: {
        flex: 0,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    rightTitle: {
        marginRight: 5,
        fontSize: 16
    },
    rightIconContainer: {
        alignItems: 'flex-end',
        justifyContent: 'center'
    }
});
export { ListItem };
