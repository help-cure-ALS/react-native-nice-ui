import { Platform } from 'react-native';
import type { UITokens } from './tokens.types';
import { isIOSVersionOrHigher } from '../platform';

export const defaultTokens: UITokens = {
    // Typography - Font Sizes
    fontSizeXs: 12,
    fontSizeSm: 14,
    fontSizeMd: 16,
    fontSizeLg: 17,
    fontSizeXl: 18,

    // Typography - Line Heights
    lineHeightXs: 16,
    lineHeightSm: 20,
    lineHeightMd: 22,
    lineHeightLg: 24,
    lineHeightXl: 28,

    // Typography - Font Weights
    fontWeightNormal: '400',
    fontWeightMedium: '500',
    fontWeightSemibold: '600',
    fontWeightBold: '700',

    // Spacing
    spacingXs: 4,
    spacingSm: 8,
    spacingMd: 12,
    spacingLg: 16,
    spacingXl: 20,

    // Border Radius
    radiusNone: 0,
    radiusSm: 6,
    radiusMd: isIOSVersionOrHigher(26) ? 12 : 10,
    radiusLg: isIOSVersionOrHigher(26) ? 14 : 10,
    radiusXl: isIOSVersionOrHigher(26) ? 16 : 12,
    radiusFull: 9999,

    // Button
    buttonHeightSm: 36,
    buttonHeightMd: 44,
    buttonHeightLg: 52,
    buttonPaddingHorizontalSm: 12,
    buttonPaddingHorizontalMd: 16,
    buttonPaddingHorizontalLg: 20,
    buttonRadius: 10,

    // List
    listItemMinHeight: isIOSVersionOrHigher(26) ? 52 : 48,
    listItemPaddingVertical: 12,
    listItemPaddingRight: isIOSVersionOrHigher(26) ? 14 : 10,
    listItemMarginLeft: isIOSVersionOrHigher(26) ? 20 : (Platform.OS === 'ios' ? 18 : 20),
    listItemRadius: isIOSVersionOrHigher(26) ? 14 : 10,
    listSectionMarginTop: 30,
    listSectionPaddingHorizontal: isIOSVersionOrHigher(26) ? 20 : 13,
    listSectionRadius: isIOSVersionOrHigher(26) ? 16 : 10,
    listSpacedGap: 10
};
