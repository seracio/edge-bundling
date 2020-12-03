import React, { memo } from 'react';

export default memo((props: any) => {
    const { id, colors } = props;

    return (
        <pattern
            id={id}
            width="4"
            height="4"
            patternUnits="userSpaceOnUse"
            patternContentUnits="objectBoundingBox"
            patternTransform="rotate(-40)"
            viewBox="0 0 16 16"
        >
            <rect
                width="12"
                height="16"
                fill={Array.isArray(colors) ? colors[0] : colors}
            />
            <rect
                width="4"
                height="16"
                x="12"
                fill={Array.isArray(colors) ? colors[1] : 'white'}
            />
        </pattern>
    );
});
