import React from 'react';
import { string, func } from 'prop-types';

const Input = ({ placeholder, name, onChange }) => (
    <div class="wrap-input100 validate-input">
        <input onChange={onChange} class="input100" type="text" name={name} />
        <span class="focus-input100"></span>
        <span class="label-input100">{placeholder}</span>
    </div>
);

Input.propTypes = {
    placeholder: string,
    name: string,
    onChange: func
};

Input.defaultProps = {
    placeholder: '',
    name: '',
    onChange: () => {}
};

export default Input;
