import { css } from '@emotion/core';
import React from 'react';
import { memo } from 'react';

const containerCss = css`
    margin: 20px auto 20px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: bold;
    color: #163860;
`;

const rectCss = css`
    position: relative;
    display: block;
    width: 35px;
    height: 15px;
    border: solid 0.5px #ddd;
    border-radius: 1px;
`;

const labelCss = css`
    position: absolute;
    display: inline-block;
    top: -20px;
`;

interface Props {
    scale: any;
    size?: number;
    format?: Function;
    label?: string;
}

export default memo(
    ({ scale, size = 6, format = d => d, label = '' }: Props) => {
        const values = scale.ticks(size);
        return (
            <div className="layout-legend-continue" css={containerCss}>
                <span style={{ marginRight: '10px' }}>{label}</span>
                {/** */}
                {values.map((v, i) => {
                    const c = scale(v);
                    return (
                        <div
                            className={'layout-legend-continue__rect'}
                            css={rectCss}
                            key={v}
                            style={{
                                background: c
                            }}
                        >
                            {(i === 0 || i === values.length - 1) && (
                                <span
                                    className={'layout-legend-continue__label'}
                                    css={labelCss}
                                    style={{
                                        [i === 0 ? 'left' : 'right']: '0%'
                                    }}
                                >
                                    {format(v)}
                                </span>
                            )}
                        </div>
                    );
                })}
            </div>
        );
    }
);
