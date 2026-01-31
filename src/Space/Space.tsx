import React, { memo } from 'react';
import { View } from 'react-native';
import { useTheme } from '../theme';

export type SpaceSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

export interface SpaceProps {
    /** Predefined size using tokens */
    size?: SpaceSize;
    /** Custom height (vertical space) */
    height?: number;
    /** Custom width (horizontal space) */
    width?: number;
    /** Flex grow to fill available space */
    flex?: boolean;
}

export const Space = memo<SpaceProps>(({ size = 'md', height, width, flex }) => {
    const { tokens } = useTheme();

    if (flex) {
        return <View style={{ flex: 1 }} />;
    }

    // Map size to token values
    const sizes: Record<SpaceSize, number> = {
        xs: tokens.spacingXs,
        sm: tokens.spacingSm,
        md: tokens.spacingMd,
        lg: tokens.spacingLg,
        xl: tokens.spacingXl,
        '2xl': tokens.spacingXl * 1.5,
        '3xl': tokens.spacingXl * 2,
    };

    const sizeValue = sizes[size];

    return (
        <View
            style={{
                height: height ?? (width ? undefined : sizeValue),
                width: width,
            }}
        />
    );
});

Space.displayName = 'Space';
