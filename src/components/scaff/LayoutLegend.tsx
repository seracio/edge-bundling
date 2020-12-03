import React from 'react';
import { memo } from 'react';
import { css } from '@emotion/core';

const containerCss = css`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-left;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 25px;
    color: #163860;
`;

const itemCss = css`
    margin: 0 10px;
`;

interface Props {
    items: Array<{
        label: string;
        color: string;
    }>;
    title?: string;
}

export default memo(({ items, title }: Props) => {
    return (
        <div className="layout-legend" css={containerCss}>
            {title}
            {items.map((item, i) => {
                const { color, label } = item;
                return (
                    <div className="item" key={i} color={color} css={itemCss}>
                        <span
                            style={{
                                display: 'inline-block',
                                backgroundColor: color,
                                width: '12px',
                                height: '12px',
                                marginRight: '10px'
                            }}
                        />

                        {label}
                    </div>
                );
            })}
        </div>
    );
});
