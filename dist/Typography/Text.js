import React, { memo } from 'react';
import { Text as RNText } from 'react-native';
import { useTheme } from '../theme';
export const Text = memo(({ variant, color = 'primary', align, style, children, ...textProps }) => {
    const { colors, tokens } = useTheme();
    const colorMap = {
        primary: colors.textPrimary,
        secondary: colors.textSecondary,
        tertiary: colors.textTertiary,
        hint: colors.textHint
    };
    const variantStyles = {
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
            letterSpacing: 0
        },
        displaySmall: {
            fontSize: 36,
            lineHeight: 44,
            fontWeight: tokens.fontWeightNormal,
            letterSpacing: 0
        },
        // Headline - Section headings
        headlineLarge: {
            fontSize: 32,
            lineHeight: 40,
            fontWeight: tokens.fontWeightNormal,
            letterSpacing: 0
        },
        headlineMedium: {
            fontSize: 28,
            lineHeight: 36,
            fontWeight: tokens.fontWeightNormal,
            letterSpacing: 0
        },
        headlineSmall: {
            fontSize: 24,
            lineHeight: 32,
            fontWeight: tokens.fontWeightNormal,
            letterSpacing: 0
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
            letterSpacing: 0.15
        },
        titleSmall: {
            fontSize: tokens.fontSizeSm,
            lineHeight: tokens.lineHeightSm,
            fontWeight: tokens.fontWeightMedium,
            letterSpacing: 0.1
        },
        // Body - Running text
        bodyLarge: {
            fontSize: tokens.fontSizeMd,
            lineHeight: tokens.lineHeightMd,
            fontWeight: tokens.fontWeightNormal,
            letterSpacing: 0.5
        },
        bodyMedium: {
            fontSize: tokens.fontSizeSm,
            lineHeight: tokens.lineHeightSm,
            fontWeight: tokens.fontWeightNormal,
            letterSpacing: 0.25
        },
        bodySmall: {
            fontSize: tokens.fontSizeXs,
            lineHeight: tokens.lineHeightXs,
            fontWeight: tokens.fontWeightNormal,
            letterSpacing: 0.4
        },
        // Label - Buttons, tabs, chips
        labelLarge: {
            fontSize: tokens.fontSizeSm,
            lineHeight: tokens.lineHeightSm,
            fontWeight: tokens.fontWeightMedium,
            letterSpacing: 0.1
        },
        labelMedium: {
            fontSize: tokens.fontSizeXs,
            lineHeight: tokens.lineHeightXs,
            fontWeight: tokens.fontWeightMedium,
            letterSpacing: 0.5
        },
        labelSmall: {
            fontSize: 11,
            lineHeight: 16,
            fontWeight: tokens.fontWeightMedium,
            letterSpacing: 0.5
        }
    };
    return (<RNText style={[
            variantStyles[variant],
            { color: colorMap[color] },
            align && { textAlign: align },
            style
        ]} {...textProps}>
            {children}
        </RNText>);
});
Text.displayName = 'Text';
