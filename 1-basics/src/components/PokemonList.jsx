import React from 'react';
import PokemonItem from './PokemonItem';
import './PokemonList.css';

const PokemonList = ({ pokemons, onDelete }) => {
    return (
        <ul className="pokemon-list">
            {pokemons.map((pokemon) => (
                <PokemonItem key={pokemon} name={pokemon} onDelete={onDelete} />
            ))}
        </ul>
    );
};

export default PokemonList;
