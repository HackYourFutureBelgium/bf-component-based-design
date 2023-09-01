import { PropTypes } from 'prop-types';

import PokemonItem from './PokemonItem';

import './PokemonList.css';

const PokemonList = ({ pokemons, onDelete }) => {
    return (
        <>
            {pokemons.length > 0 ? (
                <ul className="pokemon-list">
                    {pokemons.map((pokemon) => (
                        <PokemonItem
                            key={pokemon.id}
                            id={pokemon.id}
                            name={pokemon.name}
                            onDelete={onDelete}
                        />
                    ))}
                </ul>
            ) : (
                <p className="no-pokemon">No Pokemon exists</p>
            )}
        </>
    );
};

PokemonList.propTypes = {
    pokemons: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default PokemonList;
