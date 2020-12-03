import _ from 'lodash/fp';
import React from 'react';
import { memo, useRef, useState, useEffect } from 'react';
import { css } from '@emotion/core';
import { Card } from '../../business/types';

////////
// STYLES
////////

const containerCss = css`
    width: 100%;
    margin: auto;
    position: relative;
    user-select: none;
    pointer-events: none;

    .scrollytelling__sticky-container {
        z-index: 1;
        position: sticky;
        top: 0;
        left: 0;
        pointer-events: auto;

        width: 100vw;
        height: 100vh;

        display: flex;
        justify-content: center;
        align-items: center;

        > * {
            width: 100%;
        }
    }
`;

const cardContainerCss = (props) => css`
    -webkit-transform: translateZ(1px);
    position: relative;
    pointer-events: none;
    user-select: none;
    z-index: 2;
    width: 100%;
    max-width: 500px;
    margin: auto;
    height: ${props.size * 100}vh;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 0.9em;

    @media (max-width: 600px) {
        font-size: 0.75em;
    }

    .scrollytelling__card {
        pointer-events: none;
        border-radius: 2px;
        padding: 5px;
        max-width: 90%;
        margin: auto;

        p,
        h5 {
            word-break: break-word;
            background: rgba(255, 255, 255, 0.65);
            text-align: center;
            margin: auto;
        }

        p {
            line-height: 1.75;
            padding: 5px;
            display: inline;
            box-shadow: 15px 0 0 rgba(255, 255, 255, 0.65),
                -15px 0 0 rgba(255, 255, 255, 0.65);
        }

        h5 {
            display: inline;
            font-size: 1.2em;
            padding: 5px 10px;
            text-transform: uppercase;
            font-weight: bold;
        }

        &:first-child {
            flex-grow: -1;
            margin-top: -100%;
        }
    }
`;

interface Props {
    cards: Array<Card>;
    children: Function;
    threshold?: number;
}

export default memo(({ threshold = 0.5, cards, children }: Props) => {
    const [currentCard, setCurrentCard] = useState(() => cards[0]);

    const refCardContainer = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const indexes = entries
                    .filter(
                        (entry) =>
                            entry.isIntersecting &&
                            entry.intersectionRatio >= threshold
                    )
                    // @ts-ignore
                    .map((entry) => +entry.target.getAttribute('data-index'));
                if (!!indexes.length) {
                    const index = indexes[0];
                    const card = cards[index];
                    setCurrentCard(card);
                }
            },
            {
                threshold
            }
        );

        Array.from(
            // @ts-ignore
            refCardContainer.current.querySelectorAll('.scrollytelling__card')
        ).forEach(
            // @ts-ignore
            (card) => observer.observe(card)
        );
    }, []);

    return (
        <div className={'layout-scrollytelling'} css={containerCss}>
            <div className="scrollytelling__sticky-container">
                <div>{children(!!currentCard ? currentCard.data : null)}</div>
            </div>
            <div
                style={{
                    position: 'relative',
                    zIndex: 3
                }}
            >
                <div
                    className={'scrollytelling__card-container'}
                    css={cardContainerCss({ size: cards.length })}
                    ref={refCardContainer}
                >
                    {cards.map((card, index) => {
                        const { title, text } = card;
                        return (
                            <div
                                className="scrollytelling__card"
                                key={index}
                                data-index={index}
                            >
                                {!!title && (
                                    <div
                                        style={{
                                            width: '100%',
                                            margin: 'auto',
                                            display: 'flex',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <h5>{title}</h5>
                                    </div>
                                )}
                                {!!text && <p>{text}</p>}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
});
