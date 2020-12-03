import { css } from '@emotion/core';
import React from 'react';
import { memo, useState } from 'react';

const containerCss = css`
    position: relative;
    width: 100%;
    margin: 20px auto;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 0.9em;

    label {
        font-weight: bold;
    }

    option {
        white-space: normal;
        height: auto;
    }

    select {
        width: fit-content;
        height: 30px;
    }
`;

interface Props {
    title: string;
    children?: Function;
    items: any[];
    label?: Function;
    value?: Function;
}

export default memo(
    ({
        title,
        children = d => null,
        items,
        label = d => d,
        value = d => d
    }: Props) => {
        const [selected, setSelected] = useState(() => value(items[0]));

        function handleChange(e) {
            setSelected(e.target.value);
        }

        return (
            <>
                <div className="layout-select" css={containerCss}>
                    <label htmlFor="select">{title}</label>
                    <select
                        value={selected}
                        onChange={handleChange}
                        name="select"
                    >
                        {items.map((item, i) => {
                            return (
                                <option key={i} value={value(item)}>
                                    {label(item)}
                                </option>
                            );
                        })}
                    </select>
                </div>
                {children(selected)}
            </>
        );
    }
);
