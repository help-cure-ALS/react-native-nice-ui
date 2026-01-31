import React from 'react';
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
export declare const Space: React.NamedExoticComponent<SpaceProps>;
