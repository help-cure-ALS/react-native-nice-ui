import React, { memo, useState, useCallback } from 'react';
import {
    Platform,
    StyleProp,
    StyleSheet,
    Text,
    UIManager,
    View,
    ViewStyle,
    TextStyle
} from 'react-native';

import { useTheme } from '../theme';
import { useListContext } from './List';

// Check if native slider component is available (not in Expo Go)
const SliderAvailable = UIManager.getViewManagerConfig?.('RNCSlider') != null;

// Conditional import - only use if native module is available
let Slider: React.ComponentType<any> | null = null;
if (SliderAvailable) {
    try {
        Slider = require('@react-native-community/slider').default;
    } catch (e) {
        // Module not installed
    }
}

// Re-export availability check
export { SliderAvailable };

// Import types separately for TypeScript
import type { SliderProps } from '@react-native-community/slider';

export interface ListSliderItemProps extends Omit<SliderProps, 'style' | 'value' | 'onValueChange'> {
    /** Label text */
    label?: string;
    /** Show asterisk after label */
    required?: boolean;
    /** Current slider value */
    value?: number;
    /** Callback when value changes during sliding */
    onValueChange?: (value: number) => void;
    /** Callback when sliding is complete */
    onSlidingComplete?: (value: number) => void;
    /** Number of decimal places for displayed value */
    toFixed?: number;
    /** Prefix before the value (e.g., "$") */
    valuePrefix?: string;
    /** Suffix after the value (e.g., "%", "kg") */
    valueSuffix?: string;
    /** Hide the value display */
    hideValue?: boolean;
    /** Disable the slider */
    disabled?: boolean;
    /** Hide bottom border (auto-set for last item) */
    lastItem?: boolean;
    /** Label text style */
    labelStyle?: StyleProp<TextStyle>;
    /** Value text style */
    valueStyle?: StyleProp<TextStyle>;
    /** Slider component style */
    sliderStyle?: StyleProp<ViewStyle>;
    /** Outer container style */
    containerStyle?: StyleProp<ViewStyle>;
    /** Inner wrapper style */
    wrapperStyle?: StyleProp<ViewStyle>;
    /** Divider/border style */
    dividerStyle?: StyleProp<ViewStyle>;
}

export const ListSliderItem = memo<ListSliderItemProps>((props) => {
    const { colors, tokens } = useTheme();
    const { spaced } = useListContext();

    const {
        // List-specific props
        label,
        required = false,
        value: initialValue = 0,
        onValueChange,
        onSlidingComplete,
        toFixed = 0,
        valuePrefix = '',
        valueSuffix = '',
        hideValue = false,
        disabled = false,
        lastItem = false,
        labelStyle,
        valueStyle,
        sliderStyle,
        containerStyle,
        wrapperStyle,
        dividerStyle,
        // Slider props
        minimumValue = 0,
        maximumValue = 1,
        step,
        minimumTrackTintColor,
        maximumTrackTintColor,
        thumbTintColor,
        ...sliderProps
    } = props;

    const [currentValue, setCurrentValue] = useState(initialValue);
    const [isFocused, setIsFocused] = useState(false);

    // In spaced mode, each item is a separate card (no dividers)
    const effectiveLastItem = spaced || lastItem;

    const handleValueChange = useCallback((val: number) => {
        setCurrentValue(val);
        onValueChange?.(val);
    }, [onValueChange]);

    const handleSlidingStart = useCallback(() => {
        setIsFocused(true);
    }, []);

    const handleSlidingComplete = useCallback((val: number) => {
        setIsFocused(false);
        setCurrentValue(val);
        onSlidingComplete?.(val);
    }, [onSlidingComplete]);

    // Format the displayed value
    const displayValue = `${valuePrefix}${currentValue.toFixed(toFixed)}${valueSuffix}`;

    const styles = {
        container: {} as ViewStyle,
        containerSpaced: {
            borderRadius: tokens.listItemRadius,
            overflow: 'hidden' as const
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
            flexDirection: 'row' as const,
            alignItems: 'center' as const,
            justifyContent: 'space-between' as const,
            marginBottom: tokens.spacingXs
        },
        label: {
            fontSize: tokens.fontSizeXs + 1,
            fontWeight: tokens.fontWeightNormal
        } as TextStyle,
        labelFocused: {
            color: colors.primary
        } as TextStyle,
        value: {
            fontSize: tokens.fontSizeMd,
            fontWeight: tokens.fontWeightNormal,
            letterSpacing: -0.25
        } as TextStyle,
        sliderContainer: {
            minHeight: 40,
            justifyContent: 'center' as const
        },
        slider: {
            height: 40,
            ...Platform.select({
                android: {
                    marginHorizontal: -8
                }
            })
        } as ViewStyle
    };

    return (
        <View
            style={[
                styles.container,
                spaced && styles.containerSpaced,
                { backgroundColor: colors.listItemBackground },
                containerStyle,
                disabled && { opacity: 0.5 }
            ]}
        >
            <View
                style={[
                    styles.wrapper,
                    { borderBottomColor: colors.listItemBorder },
                    effectiveLastItem && { borderBottomWidth: 0 },
                    dividerStyle,
                    wrapperStyle
                ]}
            >
                {/* Header Row: Label + Value */}
                <View style={styles.headerRow}>
                    {label && (
                        <Text
                            style={[
                                styles.label,
                                { color: colors.textHint },
                                isFocused && styles.labelFocused,
                                labelStyle
                            ]}
                            numberOfLines={1}
                        >
                            {label}{required ? ' *' : ''}
                        </Text>
                    )}
                    {!hideValue && (
                        <Text
                            style={[
                                styles.value,
                                { color: colors.textPrimary },
                                valueStyle
                            ]}
                        >
                            {displayValue}
                        </Text>
                    )}
                </View>

                {/* Slider */}
                <View style={styles.sliderContainer}>
                    {Slider ? (
                        <Slider
                            style={[styles.slider, sliderStyle]}
                            value={currentValue}
                            minimumValue={minimumValue}
                            maximumValue={maximumValue}
                            step={step}
                            minimumTrackTintColor={minimumTrackTintColor ?? colors.primary}
                            maximumTrackTintColor={maximumTrackTintColor ?? colors.border}
                            thumbTintColor={thumbTintColor ?? (Platform.OS === 'android' ? colors.primary : undefined)}
                            disabled={disabled}
                            tapToSeek={true}
                            onValueChange={handleValueChange}
                            onSlidingStart={handleSlidingStart}
                            onSlidingComplete={handleSlidingComplete}
                            {...sliderProps}
                        />
                    ) : (
                        <Text style={{ color: colors.textHint, fontSize: tokens.fontSizeSm, fontStyle: 'italic' }}>
                            Slider requires development build
                        </Text>
                    )}
                </View>
            </View>
        </View>
    );
});

ListSliderItem.displayName = 'ListSliderItem';
