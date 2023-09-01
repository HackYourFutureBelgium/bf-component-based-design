import { useState } from 'react';
import colorNames from 'colornames';

import './App.css';

import Box from './components/Box';
import Form from './components/Form';

const App = () => {
    // State for managing the input value
    const [value, setValue] = useState('No Value');
    const [hexValue, setHexValue] = useState('');

    // Handler for input value change
    const changeHandler = (e) => {
        setValue(e.target.value);
        setHexValue(colorNames(e.target.value));
    };

    return (
        <div className="app-container">
            {/* Application title */}
            <h1 className="app-title">Color App</h1>

            {/* Display the Box component with the current input value */}
            <Box value={value} hexValue={hexValue} />

            {/* Input component for user input */}
            <Form
                value={value}
                hexValue={hexValue}
                changeHandler={changeHandler}
            />
        </div>
    );
};

export default App;
