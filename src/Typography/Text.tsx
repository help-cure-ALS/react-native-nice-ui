import React, { memo } from 'react';
import {
    Text as RNText,
    TextProps as RNTextProps,
    StyleProp,
    TextStyle
} from 'react-native';
import { useTheme } from '../theme';

export type TextVariant =
    | 'displayLarge'
    | 'displayMedium'
    | 'displaySmall'
    | 'headlineLarge'
    | 'headlineMedium'
    | 'headlineSmall'
    | 'titleLarge'
    | 'titleMedium'
    | 'titleSmall'
    | 'bodyLarge'
    | 'bodyMedium'
    | 'bodySmall'
    | 'labelLarge'
    | 'labelMedium'
    | 'labelSmall';

export type TextColor = 'primary' | 'secondary' | 'tertiary' | 'hint';

export interface TextProps extends Omit<RNTextProps, 'style'> {
    /** Typography variant (default: bodyMedium) */
    variant?: TextVariant;
    /** Text color based on theme */
    color?: TextColor;
    /** Text alignment */
    align?: TextStyle['textAlign'];
    /** Custom style */
    style?: StyleProp<TextStyle>;
    /** Children */
    children?: React.ReactNode;
}

export const Text = memo<TextProps>(({
    variant = 'bodyMedium',
    color = 'primary',
    align,
    style,
    children,
    ...textProps
}) => {
    const { colors, tokens } = useTheme();

    const colorMap = {
        primary: colors.textPrimary,
        secondary: colors.textSecondary,
        tertiary: colors.textTertiary,
        hint: colors.textHint
    };

    const variantStyles: Record<TextVariant, TextStyle> = {
        // Display - Hero text, large headings
        displayLarge: {
            fontSize: 57,
            lineHeight: 64,
            fontWeight: tokens.fontWeightNormal,
            letterSpacing: -0.25
        },
        displayMedium: {
            fontSize: 45,
            lineHeight: 52,
            fontWeight: tokens.fontWeightNormal,
            letterSpacing: -0.2
        },
        displaySmall: {
            fontSize: 36,
            lineHeight: 44,
            fontWeight: tokens.fontWeightNormal,
            letterSpacing: -0.2
        },

        // Headline - Section headings
        headlineLarge: {
            fontSize: 32,
            lineHeight: 40,
            fontWeight: tokens.fontWeightBold,
            letterSpacing: -0.2
        },
        headlineMedium: {
            fontSize: 28,
            lineHeight: 36,
            fontWeight: tokens.fontWeightBold,
            letterSpacing: -0.2
        },
        headlineSmall: {
            fontSize: 24,
            lineHeight: 32,
            fontWeight: tokens.fontWeightBold,
            letterSpacing: -0.2
        },

        // Title - Card titles, list titles
        titleLarge: {
            fontSize: 22,
            lineHeight: 28,
            fontWeight: tokens.fontWeightMedium,
            letterSpacing: 0
        },
        titleMedium: {
            fontSize: tokens.fontSizeMd,
            lineHeight: tokens.lineHeightMd,
            fontWeight: tokens.fontWeightMedium,
            letterSpacing: 0
        },
        titleSmall: {
            fontSize: tokens.fontSizeSm,
            lineHeight: tokens.lineHeightSm,
            fontWeight: tokens.fontWeightMedium,
            letterSpacing: 0
        },

        // Body - Running text
        bodyLarge: {
            fontSize: tokens.fontSizeLg,
            lineHeight: tokens.lineHeightLg,
            fontWeight: tokens.fontWeightNormal,
            letterSpacing: -0.2
        },
        bodyMedium: {
            fontSize: tokens.fontSizeMd,
            lineHeight: tokens.lineHeightMd,
            fontWeight: tokens.fontWeightNormal,
            letterSpacing: -0.2
        },
        bodySmall: {
            fontSize: tokens.fontSizeSm,
            lineHeight: tokens.lineHeightSm,
            fontWeight: tokens.fontWeightNormal,
            letterSpacing: -0.2
        },

        // Label - Buttons, tabs, chips
        labelLarge: {
            fontSize: tokens.fontSizeSm,
            lineHeight: tokens.lineHeightSm,
            fontWeight: tokens.fontWeightMedium,
            letterSpacing: -0.2
        },
        labelMedium: {
            fontSize: tokens.fontSizeXs,
            lineHeight: tokens.lineHeightXs,
            fontWeight: tokens.fontWeightMedium,
            letterSpacing: -0.2
        },
        labelSmall: {
            fontSize: 11,
            lineHeight: 16,
            fontWeight: tokens.fontWeightMedium,
            letterSpacing: -0.2
        }
    };

    return (
        <RNText
            style={[
                variantStyles[variant],
                { color: colorMap[color] },
                align && { textAlign: align },
                style
            ]}
            {...textProps}
        >
            {children}
        </RNText>
    );
});

Text.displayName = 'Text';
