import React from 'react';
import { memo, useRef, useEffect } from 'react';

export default memo(({ src }: any) => {
    const v = useRef(null);

    useEffect(() => {
        // @ts-ignore
        v.current.setAttribute('muted', 1);
        // @ts-ignore
        v.current.setAttribute('playsinline', 1);
        // @ts-ignore
        v.current.setAttribute('autoplay', 1);
    }, []);

    return (
        <video
            ref={v}
            autoPlay
            loop
            muted
            playsInline
            style={{
                flexGrow: 1,
                flexShrink: 2,
                maxWidth: '50%',
                background: 'white'
            }}
        >
            <source src={src} type="video/mp4" />
        </video>
    );
});
