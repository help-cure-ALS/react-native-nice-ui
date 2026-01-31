var _a;
import React, { memo, useState, useCallback } from 'react';
import { Platform, StyleSheet, Text, UIManager, View } from 'react-native';
import { useTheme } from '../theme';
import { useListContext } from './List';
// Check if native slider component is available (not in Expo Go)
const SliderAvailable = ((_a = UIManager.getViewManagerConfig) === null || _a === void 0 ? void 0 : _a.call(UIManager, 'RNCSlider')) != null;
// Conditional import - only use if native module is available
let Slider = null;
if (SliderAvailable) {
    try {
        Slider = require('@react-native-community/slider').default;
    }
    catch (e) {
        // Module not installed
    }
}
// Re-export availability check
export { SliderAvailable };
export const ListSliderItem = memo((props) => {
    const { colors, tokens } = useTheme();
    const { spaced } = useListContext();
    const { 
    // List-specific props
    label, required = false, value: initialValue = 0, onValueChange, onSlidingComplete, toFixed = 0, valuePrefix = '', valueSuffix = '', hideValue = false, disabled = false, lastItem = false, labelStyle, valueStyle, sliderStyle, containerStyle, wrapperStyle, dividerStyle, 
    // Slider props
    minimumValue = 0, maximumValue = 1, step, minimumTrackTintColor, maximumTrackTintColor, thumbTintColor, ...sliderProps } = props;
    const [currentValue, setCurrentValue] = useState(initialValue);
    const [isFocused, setIsFocused] = useState(false);
    // In spaced mode, each item is a separate card (no dividers)
    const effectiveLastItem = spaced || lastItem;
    const handleValueChange = useCallback((val) => {
        setCurrentValue(val);
        onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(val);
    }, [onValueChange]);
    const handleSlidingStart = useCallback(() => {
        setIsFocused(true);
    }, []);
    const handleSlidingComplete = useCallback((val) => {
        setIsFocused(false);
        setCurrentValue(val);
        onSlidingComplete === null || onSlidingComplete === void 0 ? void 0 : onSlidingComplete(val);
    }, [onSlidingComplete]);
    // Format the displayed value
    const displayValue = `${valuePrefix}${currentValue.toFixed(toFixed)}${valueSuffix}`;
    const styles = {
        container: {},
        containerSpaced: {
            borderRadius: tokens.listItemRadius,
            overflow: 'hidden'
        },
        wrapper: {
            paddingTop: tokens.spacingSm,
            paddingRight: tokens.listItemPaddingRight,
            paddingBottom: tokens.spacingSm,
            backgroundColor: 'transparent',
            minHeight: tokens.listItemMinHeight,
            borderBottomWidth: StyleSheet.hairlineWidth,
            marginLeft: tokens.listItemMarginLeft
        },
        headerRow: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: tokens.spacingXs
        },
        label: {
            fontSize: tokens.fontSizeXs + 1,
            fontWeight: tokens.fontWeightNormal
        },
        labelFocused: {
            color: colors.primary
        },
        value: {
            fontSize: tokens.fontSizeMd,
            fontWeight: tokens.fontWeightNormal,
            letterSpacing: -0.25
        },
        sliderContainer: {
            minHeight: 40,
            justifyContent: 'center'
        },
        slider: {
            height: 40,
            ...Platform.select({
                android: {
                    marginHorizontal: -8
                }
            })
        }
    };
    return (<View style={[
            styles.container,
            spaced && styles.containerSpaced,
            { backgroundColor: colors.listItemBackground },
            containerStyle,
            disabled && { opacity: 0.5 }
        ]}>
            <View style={[
            styles.wrapper,
            { borderBottomColor: colors.listItemBorder },
            effectiveLastItem && { borderBottomWidth: 0 },
            dividerStyle,
            wrapperStyle
        ]}>
                {/* Header Row: Label + Value */}
                <View style={styles.headerRow}>
                    {label && (<Text style={[
                styles.label,
                { color: colors.textTertiary },
                isFocused && styles.labelFocused,
                labelStyle
            ]} numberOfLines={1}>
                            {label}{required ? ' *' : ''}
                        </Text>)}
                    {!hideValue && (<Text style={[
                styles.value,
                { color: colors.textPrimary },
                valueStyle
            ]}>
                            {displayValue}
                        </Text>)}
                </View>

                {/* Slider */}
                <View style={styles.sliderContainer}>
                    {Slider ? (<Slider style={[styles.slider, sliderStyle]} value={currentValue} minimumValue={minimumValue} maximumValue={maximumValue} step={step} minimumTrackTintColor={minimumTrackTintColor !== null && minimumTrackTintColor !== void 0 ? minimumTrackTintColor : colors.primary} maximumTrackTintColor={maximumTrackTintColor !== null && maximumTrackTintColor !== void 0 ? maximumTrackTintColor : colors.border} thumbTintColor={thumbTintColor !== null && thumbTintColor !== void 0 ? thumbTintColor : (Platform.OS === 'android' ? colors.primary : undefined)} disabled={disabled} tapToSeek={true} onValueChange={handleValueChange} onSlidingStart={handleSlidingStart} onSlidingComplete={handleSlidingComplete} {...sliderProps}/>) : (<Text style={{ color: colors.textHint, fontSize: tokens.fontSizeSm, fontStyle: 'italic' }}>
                            Slider requires development build
                        </Text>)}
                </View>
            </View>
        </View>);
});
ListSliderItem.displayName = 'ListSliderItem';
