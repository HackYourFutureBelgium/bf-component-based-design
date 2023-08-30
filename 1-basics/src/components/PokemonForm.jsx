import { useState } from 'react';
import './PokemonForm.css';

const PokemonForm = ({ onAdd }) => {
    const [newPokemon, setNewPokemon] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newPokemon === '') {
            setError('Please add a Pokemon name');
        } else {
            setError('');
            onAdd(newPokemon);
            setNewPokemon('');
        }
    };

    return (
        <form className="pokemon-form" onSubmit={handleSubmit}>
            <div className="pokemon-form-add">
                <input
                    type="text"
                    placeholder="Enter new Pokémon"
                    value={newPokemon}
                    onChange={(e) => setNewPokemon(e.target.value)}
                />
                <button type="submit">Add</button>
            </div>
            <div className="error">{error}</div>
        </form>
    );
};

export default PokemonForm;
