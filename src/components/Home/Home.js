import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

import './Home.css';

import HomepageCard from '../HomepageCard/HomepageCard';

import Data from '../../data/data';
import Ashsvg from '../../images/ash.svg';

function Home() {
    const { homepage_cards: homepageCards } = Data;
    console.log(homepageCards);
    return (
        <div className='home'>
            <h1>What pokemon <br/> are you looking for?</h1>
            <div className='search-container'>
                <SearchIcon />
                <form>
                    <input type='text' name='text' placeholder='Search Pokemon, Move, Ability etc' />
                </form>
            </div>
            <div className='homepage_cards'>
                { homepageCards.map((card) => <HomepageCard card={card} />)}
            </div>
            <div className='homepage_footer'>
                <img src={Ashsvg} />
            </div>
        </div>
    )
}

export default Home;
