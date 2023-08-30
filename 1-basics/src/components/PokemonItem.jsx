import { PropTypes } from 'prop-types';
import './PokemonItem.css';

const PokemonItem = ({ id, name, onDelete }) => {
    return (
        <li className="pokemon-item">
            {name}
            <button className="delete-button" onClick={() => onDelete(id)}>
                Delete
            </button>
        </li>
    );
};

PokemonItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default PokemonItem;
