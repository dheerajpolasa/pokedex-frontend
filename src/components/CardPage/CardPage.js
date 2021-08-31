import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

import axios from '../../config/axios';


import './CardPage.css';

function CardPage(props) {

    const [pokemons, setPokemons] = useState([]);
    const [offsetSettings, setOffsetSettings] = useState({});
    const history = useHistory();
    const { match } = props;

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(`v1/pokemon/home`);
            console.log(response.data.data.pokemons)
            setPokemons(response?.data?.data?.pokemons);
            const newOffsetSettings = {
                is_next_enabled: response?.next_button?.is_next_enabled,
                next_offset: response?.next_button?.next_offset,
                is_previous_enabled: response?.previous_button?.is_previous_enabled,
                previous_offset: response?.previous_button?.previous_offset,
            };
            setOffsetSettings(newOffsetSettings);
        }
        fetchData();
    }, [match.params.card]);

    const goToHome = (event) => {
        event.preventDefault();
        history.push('/');
    }

    const goToPokemonPage = (event, data) => {
        event.preventDefault();
        console.log(data);
        history.push(`/pokemon/${data.name}`);
    }

    return (
        <div className="pokemon-container">
            <div className="pokemon-header">
                <KeyboardBackspaceIcon onClick={goToHome} />
            </div>
            <h1>Pokedex</h1>
            <div className="pokemons">
                {pokemons.map((pokemon) => (
                    <div className={`pokemon ${pokemon.color}-color-background`} onClick={(e) => goToPokemonPage(e, {name: pokemon.name})}>
                        <span>{pokemon.name}</span>
                        <img src={pokemon.link} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CardPage
