import React from 'react';
import { func, string, bool } from 'prop-types';

import './styles.css';

const Checkbox = ({ id, label, checked, onChange }) => (
    <div class="contact100-form-checkbox">
        <input checked={checked} onChange={onChange} class="input-checkbox100" id={id} type="checkbox" name="remember-me" />
        <label class="label-checkbox100" for={id}>{label}</label>
    </div>
);

Checkbox.propTypes = {
    id: string.isRequired,
    label: string,
    checkbox: bool,
    onChange: func
};

Checkbox.defaultProps = {
    label: '',
    checkbox: false,
    onChange: () => {}
};

export default Checkbox;