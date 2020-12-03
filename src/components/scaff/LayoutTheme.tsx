import { css } from '@emotion/core';

export const colors = {
    default: '#1f66ba',
    dark: 'rgb(22, 56, 96)',
    light: '#4a90e2',
    exergue: 'rgb(255, 202, 70)',
    bg: '#ddd',
    axis: '#ccc',
    axisText: 'black'
};

export const appCss = css`
    width: 100%;
    margin: auto;
    margin-bottom: 100px;
    text-rendering: geometricPrecision;
    -webkit-font-smoothing: antialiased;
    font-family: 'Lato', sans-serif;
    color: #163860;
    fill: #161616;
    z-index: 1;
    background-color: transparent;
    position: relative;
    font-size: 1em;

    a {
        color: #4a90e2;
        &:visited {
            color: #4a90e2;
        }
        text-decoration: underline;
    }

    @media (max-width: 600px) {
        font-size: 15px;
    }

    button {
        font-family: 'Lato', sans-serif;
        font-weight: 600;
        padding: 12px 24px;
        border-radius: 4px;
        border: none;
        border-style: none;
        text-transform: uppercase;
        outline: none;
        cursor: pointer;
        @media (max-width: 600px) {
            padding: 8px 12px;
            font-size: 0.7em;
        }
    }

    h1 {
        display: block;
        font-size: 1.8em;
        font-weight: bold;
        line-height: 1.4;
        text-align: center;
        max-width: 550px;
        margin: 20px auto;
        color: #163860;

        @media (max-width: 700px) {
            font-size: 1.5em;
            margin: 15px auto;
        }
    }

    h2 {
        color: #163860;
        display: block;
        font-size: 1.3em;
        line-height: 1.4;
        margin: 30px auto 5px auto;
        font-weight: bold;
    }

    h3 {
        font-family: 'Lato', sans-serif;
        color: #163860;
        display: block;
        font-size: 1.5em;
        line-height: 1.2;
        margin: 30px auto 5px auto;
        font-weight: bold;
    }

    h4 {
        font-weight: bold;
        font-family: 'Lato', sans-serif;
        color: #163860;
        margin: 30px auto 0 auto;
        max-width: 500px;
        text-align: center;
    }

    .column {
        max-width: 650px;
        margin: auto;
        padding: 0 15px;

        > p {
            font-size: 1.1em;
            line-height: 1.6;
            margin: 20px 0;
        }
    }

    .exergue {
        display: block;
        padding: 25px 5px;
        width: 80%;
        margin: 25px auto;
        font-size: 1.5em;
        font-weight: bold;
        max-width: 500px;
        color: #163860;
    }

    .date {
        font-family: 'Lato', sans-serif;
        font-size: 1em;
        color: #727272;
        font-weight: light;
    }

    .column .chapo {
        font-size: 1.2em;
        font-weight: light;
        color: #163860;
        text-align: center;
        &::first-letter {
            font-size: 2em;
            font-weight: bold;
            line-height: 0;
        }
        @media (max-width: 700px) {
            text-align: left;
        }
    }

    .chart-explainer {
        font-family: 'Lato', sans-serif;
        margin: 0 auto;
    }

    .card {
        font-family: 'Lato', sans-serif;
        color: #163860;
        background-color: #eff6ff;
        padding: 10px;
        margin: 30px auto;
        width: 100%;
        max-width: 600px;
        border-radius: 4px;
    }

    .layout-tooltip {
        h4 {
            margin: 5px auto;
        }
        ul {
            padding-left: 5px;
            list-style: none;
        }
    }

    .quote {
        display: inline;
        font-style: italic;
        &::before {
            content: '«';
        }
        &::after {
            content: '»';
        }
    }
`;
