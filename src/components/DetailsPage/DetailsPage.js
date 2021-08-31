import React from 'react'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import './DetailsPage.css';

function DetailsPage() {
    return (
        <div className="detail-main-container">
            <div className="detail-container">
                <div className="detail-header">
                    <KeyboardBackspaceIcon />
                    <FavoriteBorderIcon />
                </div>
                <div className="details">
                    <h3>Bulbasaur</h3>
                    <div className="brief-details">
                        <h5>Grass</h5>
                        <h5>Poison</h5>
                    </div>
                </div>
                <div className="image-container">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" />
                </div>
            </div>
            <div className="bottom-sheet">
                
            </div>
        </div>
    )
}

export default DetailsPage
