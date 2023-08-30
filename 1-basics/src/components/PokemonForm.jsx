import { useState } from 'react';
import { PropTypes } from 'prop-types';

import './PokemonForm.css';

const PokemonForm = ({ onAdd }) => {
    const [newName, setNewName] = useState('');
    const [error, setError] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

        if (newName.trim() === '') {
            setError('Please add a Pokémon name');
        } else {
            setError('');
            onAdd(newName);
            setNewName('');
        }
    };

    const changeHandler = (e) => {
        setError('');
        setNewName(e.target.value);
    };

    return (
        <form className="pokemon-form" onSubmit={submitHandler}>
            <div className="pokemon-form-add">
                <input
                    type="text"
                    placeholder="Enter new Pokémon"
                    value={newName}
                    onChange={changeHandler}
                />
                <button type="submit">Add</button>
            </div>
            {error && <div className="error">{error}</div>}
        </form>
    );
};

PokemonForm.propTypes = {
    onAdd: PropTypes.func.isRequired
};

export default PokemonForm;
