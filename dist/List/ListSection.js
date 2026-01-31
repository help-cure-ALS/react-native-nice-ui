import React, { memo } from 'react';
import { List } from './List';
const ListSection = memo((props) => {
    const { title, rightCmp, rounded = false, borders = true, spaced = false, spacing, style, containerStyle, titleStyle, children, ...attributes } = props;
    return (<List {...attributes} title={title} rightCmp={rightCmp} rounded={rounded} borders={borders} spaced={spaced} spacing={spacing} style={style} containerStyle={containerStyle} titleStyle={titleStyle}>
            {children}
        </List>);
});
export { ListSection };
