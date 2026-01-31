import React from 'react';
import { StyleProp, TextInputProps, ViewStyle, TextStyle } from 'react-native';
export interface ListInputItemProps extends Omit<TextInputProps, 'style'> {
    /** Label text above the input (or left side when inline) */
    label?: string;
    /** Show asterisk after label */
    required?: boolean;
    /** Horizontal layout: label left, input right (like List.Item with rightTitle) */
    inline?: boolean;
    /** Show password toggle button */
    showPasswordToggle?: boolean;
    /** Size of the password toggle icon */
    passwordToggleSize?: number;
    /** Disable the input */
    disabled?: boolean;
    /** Hide bottom border (auto-set for last item) */
    lastItem?: boolean;
    /** Label text style */
    labelStyle?: StyleProp<TextStyle>;
    /** Input text style */
    inputStyle?: StyleProp<TextStyle>;
    /** Outer container style */
    containerStyle?: StyleProp<ViewStyle>;
    /** Inner wrapper style (padding, minHeight) */
    wrapperStyle?: StyleProp<ViewStyle>;
    /** Divider/border style */
    dividerStyle?: StyleProp<ViewStyle>;
}
export interface ListInputItemRef {
    focus: () => void;
    blur: () => void;
    clear: () => void;
    isFocused: () => boolean;
}
export declare const ListInputItem: React.NamedExoticComponent<ListInputItemProps & React.RefAttributes<ListInputItemRef>>;
