import React from 'react';
import { string, func } from 'prop-types';

import './styles.css';

const Button = ({ title, type, onClick }) => (
    <div class="col-lg-12">
        <div class="single-form form-group">
            <button class="main-btn" type={type} onClick={onClick}>{title}</button>
        </div>
    </div>
);

Button.propTypes = {
    title: string,
    type: string,
    onClick: func
};

Button.defaultProps = {
    title: '',
    type: 'submit',
    onClick: () => {}
};

export default Button;