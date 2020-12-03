import React from 'react';
import { memo, useRef } from 'react';

const xmlns = 'http://www.w3.org/2000/xmlns/';
const xlinkns = 'http://www.w3.org/1999/xlink';
const svgns = 'http://www.w3.org/2000/svg';

const serializeSVG = svg => {
    svg = svg.cloneNode(true);
    svg.setAttributeNS(xmlns, 'xmlns', svgns);
    svg.setAttributeNS(xmlns, 'xmlns:xlink', xlinkns);
    // @ts-ignore
    const serializer = new window.XMLSerializer();
    const string = serializer.serializeToString(svg);
    return new Blob([string], { type: 'image/svg+xml' });
};

interface Props {
    name: string;
    children: any;
}

export default memo(({ name, children }: Props) => {
    const refA = useRef(null);
    const refRoot = useRef(null);

    function handleClick(e) {
        // @ts-ignore
        const blob = serializeSVG(refRoot.current.querySelector('svg'));
        // @ts-ignore
        refA.current.href = URL.createObjectURL(blob);
        // @ts-ignore
        refA.current.download = name + '.svg';
    }

    return (
        <div ref={refRoot}>
            <a href={''} onClick={handleClick} ref={refA}>
                download
            </a>
            {children}
        </div>
    );
});
