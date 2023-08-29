import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

import pikaUrl from './pikachu.webp';

import './PokemonForm.css';

const pokemons = ['pikachu', 'Kevin', 'Nico', 'Ibrahim'];

export const PokemonForm = () => {
  const [value, setValue] = useState('');
  const [errors, setErrors] = useState([]);
  const [pokemonSelect, setPokemon] = useState(false);

  const checkForErrors = (valueToCheck) => {
    if (!pokemons.includes(valueToCheck)) {
      setErrors(['Pokemon not found']);
    } else {
      setErrors([]);
    }
  };

  const hasError = !!errors.length;
  const isCorrect = !hasError && value.length;

  return (
    <>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          setPokemon(true);
        }}
      >
        <Form.Control
          isInvalid={errors.length}
          placeholder='Email'
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            checkForErrors(e.target.value);
          }}
        />
        <Button type='submit' disabled={!isCorrect}>
          submit
        </Button>
      </Form>

      {hasError && <Alert variant='danger'>{errors[0]}</Alert>}
      {!!isCorrect && (
        <Alert variant='success'>
          {`You can submit the pokemon: ${value}`}
        </Alert>
      )}
      {pokemonSelect && <img src={pikaUrl} alt={value} />}
    </>
  );
};
