import React from 'react';
import { string, func } from 'prop-types';

import './styles.css';

const Input = ({ placeholder, name, value, type, onChange }) => (
    <div class="wrap-input100 validate-input">
        <input type={type} onChange={onChange} value={value} class="input100" name={name} />
        <span class="focus-input100"></span>
        <span class="label-input100">{placeholder}</span>
    </div>
);

Input.propTypes = {
    placeholder: string,
    name: string,
    value: string,
    type: string,
    onChange: func
};

Input.defaultProps = {
    placeholder: '',
    name: '',
    value: undefined,
    type: 'text',
    onChange: () => {}
};

export default Input;
