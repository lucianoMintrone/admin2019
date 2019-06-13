import React from 'react';
import { Link } from 'react-router-dom';
import { string, func } from 'prop-types';

const Button = ({ title, type, onClick, to }) => (
    <div class="container-login100-form-btn">
        {
            to
                ? (
                    <Link to={to} class="login100-form-btn no-style-link link-white-text">
                        {title}
                    </Link>
                )
                : (
                    <button type={type} onClick={onClick} style={{ cursor: 'pointer' }} class="login100-form-btn no-style-link link-white-text">
                        {title}
                    </button>
                )
        }
    </div>
);

Button.propTypes = {
    title: string,
    type: string,
    to: string,
    onClick: func
};

Button.defaultProps = {
    title: '',
    type: 'submit',
    to: undefined,
    onClick: () => {}
};

export default Button;
