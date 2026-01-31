import React, { memo } from 'react';
import { View } from 'react-native';
import { useTheme } from '../theme';
export const Space = memo(({ size = 'md', height, width, flex }) => {
    const { tokens } = useTheme();
    if (flex) {
        return <View style={{ flex: 1 }}/>;
    }
    // Map size to token values
    const sizes = {
        xs: tokens.spacingXs,
        sm: tokens.spacingSm,
        md: tokens.spacingMd,
        lg: tokens.spacingLg,
        xl: tokens.spacingXl,
        '2xl': tokens.spacingXl * 1.5,
        '3xl': tokens.spacingXl * 2,
    };
    const sizeValue = sizes[size];
    return (<View style={{
            height: height !== null && height !== void 0 ? height : (width ? undefined : sizeValue),
            width: width,
        }}/>);
});
Space.displayName = 'Space';
