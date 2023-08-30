import { useState } from 'react';

import './App.css';

import PokemonList from './components/PokemonList';
import PokemonForm from './components/PokemonForm';

const App = () => {
    const [pokemonList, setPokemonList] = useState([
        'Pikachu',
        'Charmander',
        'Bulbasaur'
    ]);

    const addPokemon = (newPokemon) => {
        setPokemonList([newPokemon, ...pokemonList]);
    };

    const deletePokemon = (pokemon) => {
        const updatedList = pokemonList.filter((name) => name !== pokemon);
        setPokemonList(updatedList);
    };

    return (
        <div className="app-container">
            <h1 className="app-title">Pokemon App</h1>
            <PokemonForm onAdd={addPokemon} />
            <PokemonList pokemons={pokemonList} onDelete={deletePokemon} />
        </div>
    );
};

export default App;
