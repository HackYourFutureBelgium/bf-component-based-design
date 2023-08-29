import { useState, useEffect } from 'react';

export const usePokemonList = () => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchInitialList = () => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((response) => response.json())
      .then((response) => {
        setTimeout(() => {
          setList(response.results);
          setIsLoading(false);
        }, 500);
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  useEffect(fetchInitialList, []);

  const removeItem = (index) => {
    const updatedList = [...list];
    updatedList.splice(index, 1);
    setList(updatedList);
  };

  return {
    list,
    isLoading,
    removeItem,
  };
};
