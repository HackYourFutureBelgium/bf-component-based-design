import PropTypes from 'prop-types';
import './Box.css';

const Box = ({ value, hexValue }) => {
    return (
        <>
            <section style={{ backgroundColor: value }} className="box-section">
                <p className="box-text">{value}</p>
                <p className="box-text">{hexValue}</p>
            </section>
        </>
    );
};

Box.defaultProps = {
    value: 'No Value',
    hexValue: ''
};

Box.propTypes = {
    value: PropTypes.string.isRequired,
    hexValue: PropTypes.string.isRequired
};

export default Box;
