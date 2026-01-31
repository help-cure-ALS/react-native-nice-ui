import React from 'react';
import { StyleProp, ViewStyle, TextStyle } from 'react-native';
declare const SliderAvailable: boolean;
export { SliderAvailable };
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
export declare const ListSliderItem: React.NamedExoticComponent<ListSliderItemProps>;
