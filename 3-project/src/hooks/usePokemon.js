import { useState, useEffect } from 'react';

import { ErrorCode } from '../constants';
import { useErrorsContext } from '../contexts';

export const usePokemon = (pokemonId) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { setError } = useErrorsContext();

  const fetchPokemon = () => {
    setData(null);
    setIsLoading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon/aojdfeh${pokemonId}`)
      .then((response) => {
        if (response.ok) return response.json();

        throw new Error(ErrorCode.POKEMON_NOT_FOUND);
      })
      .then((response) => {
        setTimeout(() => {
          setData(response);
          setIsLoading(false);
        }, 500);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.message);
      });
  };

  useEffect(fetchPokemon, [pokemonId]);

  return {
    data,
    isLoading,
  };
};
