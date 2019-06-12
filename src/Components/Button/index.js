import React from 'react';
import { Link } from 'react-router-dom';
import { string, func } from 'prop-types';

const Button = ({ title, onClick, to }) => (
    <div class="container-login100-form-btn">
        {
            to
                ? (
                    <Link to={to} class="login100-form-btn no-style-link link-white-text">
                        {title}
                    </Link>
                )
                : (
                    <a onClick={onClick} style={{ cursor: 'pointer' }} class="login100-form-btn no-style-link link-white-text">
                        {title}
                    </a>
                )
        }
    </div>
);

Button.propTypes = {
    title: string,
    to: string,
    onClick: func
};

Button.defaultProps = {
    title: '',
    to: undefined,
    onClick: () => {}
};

export default Button;
