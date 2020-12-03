import React from 'react';
import { memo, useReducer } from 'react';
import { css } from '@emotion/core';

const containerCss = css`
    font-family: 'Source Sans Pro', sans-serif;
    position: relative;
    border: solid 1px #ccc;
    width: 100%;
    max-width: 300px;
    margin: 5px auto;
    display: flex;
    align-items: center;
    height: 40px;

    img {
        width: 20px;
        height: 20px;
        margin: 0 10px;
    }
    input {
        width: 250px;
        border: none;
        margin: 0;
        padding: 5px;
        height: 30px;
        font-size: 1em;
    }
    input:focus {
        outline: none !important;
    }

    .suggestions {
        position: absolute;
        background: transparent;
        left: 0;
        top: 40px;
        width: 100%;
        list-style: none;
        margin-top: 0;
        z-index: 2;
    }

    .suggestions li {
        background: white;
        border-bottom: solid 1px #efefef;
        padding: 5px;
        cursor: pointer;
    }

    .suggestions li.selected {
        background: aliceblue;
        font-weight: bold;
    }
`;

interface Props {
    placeholder?: string;
    querySize?: number;
    submit: Function;
    search: Function;
    label: Function;
}

function reducer(state, newState) {
    return {
        ...state,
        ...newState
    };
}

const initialState = {
    query: '',
    ssi: 0,
    suggestions: []
};

export default memo(
    ({
        label,
        querySize = 2,
        submit,
        search,
        placeholder = 'rentrez votre recherche'
    }: Props) => {
        const [state, dispatch] = useReducer(reducer, initialState);

        function handleChange(event) {
            event.stopPropagation();
            const newQuery = event.target.value;
            if (newQuery.length >= querySize) {
                dispatch({ query: newQuery });
                search(newQuery).then((suggestions) =>
                    dispatch({ suggestions })
                );
            } else {
                dispatch({ query: newQuery, ssi: 0, suggestions: [] });
            }
        }

        function handleKeys(event) {
            event.stopPropagation();
            const { key } = event;
            if (key === 'ArrowDown') {
                dispatch({
                    ssi: Math.min(state.ssi + 1, state.suggestions.length - 1)
                });
            } else if (key === 'ArrowUp') {
                dispatch({
                    ssi: Math.max(state.ssi - 1, 0)
                });
            } else if (key === 'Enter') {
                state.suggestions[state.ssi] &&
                    submit(state.suggestions[state.ssi]);
                dispatch(initialState);
            } else if (key === 'Escape') {
                dispatch(initialState);
            }
        }

        function handleMousenter(event) {
            event.stopPropagation();
            dispatch({
                ssi: +event.target.getAttribute('data-index')
            });
        }

        function handleClick(event) {
            event.stopPropagation();
            state.suggestions[state.ssi] &&
                submit(state.suggestions[state.ssi]);
            dispatch(initialState);
        }

        return (
            <div className={'widget-autocomplete'} css={containerCss}>
                <img src="./images/magnifier.png" alt="recherche" />
                <input
                    type="text"
                    value={state.query}
                    placeholder={placeholder}
                    onChange={handleChange}
                    onKeyDown={handleKeys}
                />
                <ul className="suggestions">
                    {state.suggestions.map((s, i) => {
                        return (
                            <li
                                key={i}
                                className={i === state.ssi ? 'selected' : ''}
                                data-index={i}
                                onMouseEnter={handleMousenter}
                                onClick={handleClick}
                            >
                                {label(s)}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
);
