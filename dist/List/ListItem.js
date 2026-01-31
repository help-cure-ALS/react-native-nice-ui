import React, { memo } from 'react';
import { Image, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { ArrowRight, CheckboxEmpty, CheckboxChecked } from '../assets/icons';
import { useTheme } from '../theme';
import { useListContext } from './List';
const ListItem = memo((props) => {
    const { colors, tokens } = useTheme();
    const { spaced } = useListContext();
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
    type = null, checked = null, checkboxSize = 28, hideChevron: hideChevronProp, rightIconSize = 20, rightIconColor = colors.listItemIcon, 
    // behavior
    disabled = false, lastItem = false, onPress, onLongPress, 
    // children
    children } = props;
    // For checkbox type, hideChevron defaults to true but can be overridden with hideChevron={false}
    const hideChevron = hideChevronProp !== null && hideChevronProp !== void 0 ? hideChevronProp : (type === 'checkbox');
    // In spaced mode, each item is a separate card (no dividers)
    const effectiveLastItem = spaced || lastItem;
    const hasLeftCmp = !!leftCmp;
    const hasImageSource = !!imageSource;
    const hasImageSvg = !!imageAsSvg;
    const hasRightTitle = rightTitle !== '';
    const isPressable = !!(onPress || onLongPress);
    const showSubtitle = subtitle !== null && subtitle !== '';
    // Dynamic styles using tokens
    const styles = {
        container: {},
        containerSpaced: {
            borderRadius: tokens.listItemRadius,
            overflow: 'hidden'
        },
        leftCmpWrapper: {
            marginRight: tokens.spacingLg,
            overflow: 'hidden'
        },
        imageWrapper: {
            marginRight: tokens.spacingLg,
            overflow: 'hidden'
        },
        listItemImage: {
            borderRadius: tokens.radiusSm
        },
        wrapper: {
            paddingTop: tokens.listItemPaddingVertical,
            paddingRight: tokens.listItemPaddingRight,
            paddingBottom: tokens.listItemPaddingVertical,
            backgroundColor: 'transparent',
            flexDirection: 'row',
            alignItems: 'center',
            minHeight: tokens.listItemMinHeight,
            borderBottomWidth: StyleSheet.hairlineWidth,
            marginLeft: tokens.listItemMarginLeft
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
            fontSize: tokens.fontSizeMd + 0.5,
            fontWeight: tokens.fontWeightNormal,
            marginRight: 5
        },
        titleMediaStyle: {
            fontSize: tokens.fontSizeMd + 0.5,
            lineHeight: tokens.lineHeightMd,
            fontWeight: tokens.fontWeightBold
        },
        subtitle: {
            marginTop: 3,
            fontSize: tokens.fontSizeSm + 1
        },
        rightTitleContainer: {
            flex: 0,
            alignItems: 'flex-end',
            justifyContent: 'center'
        },
        rightTitle: {
            marginRight: 5,
            fontSize: tokens.fontSizeMd
        },
        rightIconContainer: {
            alignItems: 'flex-end',
            justifyContent: 'center'
        }
    };
    return (<Pressable disabled={!isPressable || disabled} onPress={onPress} onLongPress={onLongPress} android_ripple={Platform.OS === 'android' ? { color: colors.listItemBackgroundPress } : undefined} accessibilityRole={type === 'checkbox' ? 'checkbox' : isPressable ? 'button' : 'text'} accessibilityState={type === 'checkbox' ? { checked: !!checked, disabled } : { disabled }} style={({ pressed }) => [
            styles.container,
            spaced && styles.containerSpaced,
            { backgroundColor: colors.listItemBackground },
            containerStyle,
            disabled && { opacity: 0.5 },
            pressed && isPressable && !disabled && { backgroundColor: colors.listItemBackgroundPress }
        ]}>
            <View style={[
            styles.wrapper,
            { borderBottomColor: colors.listItemBorder },
            effectiveLastItem && { borderBottomWidth: 0 },
            dividerStyle,
            wrapperStyle
        ]}>
                {hasLeftCmp && (<View style={[
                styles.leftCmpWrapper,
                leftCmpSize != null ? { width: leftCmpSize } : undefined,
                leftCmpWrapperStyle,
                leftCmpStyle
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
            { color: colors.textPrimary },
            titleStyle
        ]}>
                            {title}
                        </Text>

                        {titleCmp && <View>{titleCmp}</View>}
                    </View>

                    {showSubtitle && (<Text numberOfLines={subtitleNumberOfLines} style={[styles.subtitle, { color: colors.textTertiary }, subtitleStyle]}>
                            {subtitle}
                        </Text>)}
                </View>

                {hasRightTitle && (<View style={[styles.rightTitleContainer, rightTitleContainerStyle]}>
                        <Text numberOfLines={1} style={[styles.rightTitle, { color: colors.textTertiary }, rightTitleStyle]}>
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
export { ListItem };
