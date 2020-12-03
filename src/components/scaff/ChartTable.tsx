import { hsl } from 'd3-color';
import React from 'react';
import { memo } from 'react';
import { css } from '@emotion/core';

const containerCss = css`
    margin: auto;
    position: relative;
    width: 100%;
    max-width: 600px;

    table {
        font-family: 'Source Sans Pro', sans-serif;
        margin: 20px 1em 1em 0;
        font-size: 0.9em;
        height: auto;
        table-layout: fixed;
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;

        @media (max-width: 600px) {
            font-size: 0.6em;
        }

        thead {
            border-bottom: 2px solid #222222;
            font-weight: bold;
            vertical-align: bottom;
            text-transform: uppercase;

            th {
                font-weight: 400;
                text-align: left;
                padding: 0.5em 0.5em 0.2em 0.5em;
                line-height: 1.4em;
                vertical-align: bottom;
            }

            th.number {
                text-align: right;
            }
        }

        tr:last-child td {
            border-bottom: none;
        }

        td {
            border-bottom: 1px solid #cdcdcd;
            vertical-align: middle;
            line-height: 1.35em;
            padding: 0.25em 0.5em 0.25em 0.5em;
            height: 100%;

            &::last {
            }
        }

        td.text {
            text-align: left;
        }
        td.number {
            text-align: right;
            font-family: monospace;
            width: 25%;
        }
    }
`;

type Props = {
    data: any[];
    columns: Array<{
        title: string;
        attr: Function;
        type: 'text' | 'number';
        format?: Function;
        fill?: Function;
        width?: string;
    }>;
};

export default memo(({ data, columns }: Props) => {
    return (
        <div className="chart-table" css={containerCss}>
            <table>
                <thead>
                    <tr>
                        {columns.map((c, i) => {
                            const { title, type, width = 'auto' } = c;
                            return (
                                <th key={i} className={type} style={{ width }}>
                                    {title}
                                </th>
                            );
                        })}
                    </tr>
                </thead>
                <tbody>
                    {data.map((d, i) => {
                        return (
                            <tr key={i}>
                                {columns.map((c, ii) => {
                                    const {
                                        attr,
                                        type,
                                        format = d => d,
                                        fill = d => 'white',
                                        width = 'auto'
                                    } = c;
                                    const val = attr(d, i);
                                    const fillC = fill(val);
                                    const colorC =
                                        hsl(fillC).l > 0.65 ? 'black' : 'white';

                                    return (
                                        <td
                                            key={ii}
                                            className={type}
                                            style={{
                                                backgroundColor: fillC,
                                                color: colorC,
                                                width
                                            }}
                                        >
                                            {format(val)}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
});
