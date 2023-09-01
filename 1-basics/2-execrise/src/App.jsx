import { useState } from 'react';

import './App.css';

import PokemonList from './components/PokemonList';
import PokemonForm from './components/PokemonForm';

const App = () => {
    const [pokemonList, setPokemonList] = useState([
        {
            id: 1,
            name: 'Pikachu'
        },
        {
            id: 2,
            name: 'Charmander'
        },
        {
            id: 3,
            name: 'Bulbasaur'
        }
    ]);

    const addPokemon = (pokemonName) => {
        const newPokemon = {
            id: pokemonList[pokemonList.length - 1].id + 1,
            name: pokemonName
        };
        setPokemonList([newPokemon, ...pokemonList]);
    };

    const deletePokemon = (id) => {
        const updatedList = pokemonList.filter((pokemon) => pokemon.id !== id);
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
