import React, { useState } from 'react';

import { func } from 'prop-types';

import Button from '../Main/Button';

import './styles.css';

const userIsValid = (email) => {
	const users = JSON.parse(localStorage.getItem('users'));
	return users.find(({ email: e }) => e === email);
};

const changePassword = (email, password) => {
    const users = JSON.parse(localStorage.getItem('users'));
    const index = users.findIndex(({ email: e }) => e === email);
    const user = users[index];
    user.password = password;
    users.splice(index, 1, user);
    localStorage.setItem('users', JSON.stringify(users));
};

const validateRecoverPasswordForm = ({ email, password, passwordConfirm }, setError, close) => {
	let errorMessage = '';
	if (!RegExp(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/).test(email)) {
		errorMessage = 'Email inválido.';
    } else {
        if (!userIsValid(email)) errorMessage += 'El usuario no existe.';
    }
    if (password.length < 6) {
		errorMessage += ' Contraseña demasiado corta (min 6).';
    }
    if (password !== passwordConfirm) {
		errorMessage += ' Las contraseñas no coinciden.';
	}
	if (errorMessage === '') {
        changePassword(email, password);
        close();
    }
	setError(errorMessage);
};

const RecoverPasswordModal = ({ close }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [error, setError] = useState('');

    return (
        <div class="popup">
            <div class="flex-sb flex-m">
                <h4>Recuperar Contraseña</h4>
                <i onClick={close} style={{ cursor: 'pointer' }} class="lni-close"></i>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="single-form form-group">
                        <input value={email} onChange={e => setEmail(e.target.value)} type="text" name="email" placeholder="Email" />
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="single-form form-group">
                        <input value={password} onChange={e => setPassword(e.target.value)} type="password" name="name" placeholder="Contraseña" />
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="single-form form-group">
                        <input value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)} type="password" name="passwordConfirm" placeholder="Confirmar Contraseña" />
                    </div>
                </div>
            </div>
            <span style={{ color: '#FF9494' }} class="txt2">
                {error}
            </span>
            <Button title="RECUPERAR" onClick={() => validateRecoverPasswordForm({ email, password, passwordConfirm }, setError, close)} />
        </div>
    );
};

RecoverPasswordModal.propTypes = {
    close: func
};

RecoverPasswordModal.defaultProps = {
    close: () => {}
};

export default RecoverPasswordModal;
