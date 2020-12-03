import React from 'react';
import { memo } from 'react';
import { css } from '@emotion/core';

const containerCss = css`
    width: 100%;
    margin: 50px auto;

    img {
        width: 100%;
        margin: 0;
    }

    p {
        margin: 0;
        color: #727272;
        line-height: 1.2;
    }
`;

interface Props {
    url: string;
    credit: string;
    containerStyle: any;
}

export default memo(({ containerStyle, credit, url }: Props) => {
    return (
        <div
            style={containerStyle}
            className="layout-illustration"
            css={containerCss}
        >
            <img src={url} loading="lazy" />
            <p>
                <i>{credit}</i>
            </p>
        </div>
    );
});
