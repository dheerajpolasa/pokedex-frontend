import React from 'react'
import { Link, useHistory } from 'react-router-dom';

import './HomepageCard.css'

import Data from '../../data/data';

const { homepage_cards_colors: homepageCardsColors } = Data;

function getBackgroundColorClass(card) {
    const color = homepageCardsColors.filter((item) => item.color === card.color);
    return color[0]?.class;
}

function HomepageCard(props) {
    const { card } = props;
    const history = useHistory();

    const changePage = (card) => {
        const to = `/card/${card}`;
        history.push(to);
    }

    const backgroundColorClass = getBackgroundColorClass(card);
    return (
        <div className={`homepage_card ${backgroundColorClass}`} onClick={() => changePage(card.card, history)}>
            <h3>{card.card}</h3>
        </div>
    )
}

export default HomepageCard;
