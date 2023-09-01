import PropTypes from 'prop-types';
import './Form.css';

const Form = ({ value, changeHandler }) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input
                className="color-input"
                type="text"
                value={value}
                autoFocus
                onChange={(e) => changeHandler(e)}
            />
        </form>
    );
};

Form.defaultProps = {
    value: '',
    changeHandler: () => {},
    submitHandler: () => {}
};

Form.propTypes = {
    value: PropTypes.string,
    changeHandler: PropTypes.func.isRequired,
    submitHandler: PropTypes.func.isRequired
};

export default Form;
