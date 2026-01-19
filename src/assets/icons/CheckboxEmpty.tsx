import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

export function CheckboxEmpty(props: SvgProps) {
    return (
        <Svg viewBox="0 0 28 28" { ...props }><Path
            d="M14,2 C20.627417,2 26,7.372583 26,14 C26,20.627417 20.627417,26 14,26 C7.372583,26 2,20.627417 2,14 C2,7.372583 7.372583,2 14,2 Z M14,3 C7.92486775,3 3,7.92486775 3,14 C3,20.0751322 7.92486775,25 14,25 C20.0751322,25 25,20.0751322 25,14 C25,7.92486775 20.0751322,3 14,3 Z" />
        </Svg>
    );
}
