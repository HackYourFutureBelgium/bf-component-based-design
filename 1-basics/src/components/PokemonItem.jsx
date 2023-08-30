import React from 'react';
import './PokemonItem.css';

const PokemonItem = ({ name, onDelete }) => {
    return (
        <li className="pokemon-item">
            {name}
            <button className="delete-button" onClick={() => onDelete(name)}>
                Delete
            </button>
        </li>
    );
};

export default PokemonItem;
