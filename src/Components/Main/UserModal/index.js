import React, { useState } from 'react';
import { func, shape, string, bool } from 'prop-types';

import Button from '../Button';

import './styles.css';

const validateNewUserForm = (newUser, setError, submit) => {
	let errorMessage = '';
	if (newUser.firstname === '') errorMessage = 'Nombre es requerido.';
    if (newUser.lastname === '') errorMessage += ' Apellido es requerido.';
    if (!RegExp(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/).test(newUser.email)) {
		errorMessage += ' Email inválido.';
	} 
    if (newUser.password.length < 6) errorMessage += ' Contraseña demasiado corta (min 6).';
    if (newUser.password !== newUser.passwordConfirm) errorMessage += ' Las contraseñas no coinciden.';
	if (errorMessage === '') submit({ ...newUser, type: 'admin' });
	setError(errorMessage);
}

const UserModal = ({ onSubmit, user, close, edit }) => {
    const [firstname, setFirstname] = useState(user.firstname);
    const [lastname, setLastname] = useState(user.lastname);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState(user.password);
    const [passwordConfirm, setPasswordConfirm] = useState(user.passwordConfirm);
    const [error, setError] = useState('');

    return (
        <div class="popup">
            <div class="flex-sb flex-m">
                <h4>Nuevo Admin</h4>
                <i onClick={close} style={{ cursor: 'pointer' }} class="lni-close"></i>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="single-form form-group">
                        <input value={firstname} onChange={e => setFirstname(e.target.value)} type="text" name="firstname" placeholder="Nombre" />
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="single-form form-group">
                        <input value={lastname} onChange={e => setLastname(e.target.value)} type="text" name="lastname" placeholder="Apellido" />
                    </div>
                </div>
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
                        <input value={password} onChange={e => setPassword(e.target.value)} type="password" name="password" placeholder="Contraseña" />
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
            <Button title={edit ? 'EDITAR' : 'CREAR'} onClick={() => validateNewUserForm({ firstname, lastname, email, password, passwordConfirm }, setError, onSubmit)} />
        </div>
    );
}

UserModal.propTypes = {
    onSubmit: func,
    user: shape({
        firstname: string,
        lastname: string,
        email: string,
        password: string,
        passwordConfirm: string
    }),
    close: func,
    edit: bool
};

UserModal.defaultProps = {
    onSubmit: () => {},
    user: {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        passwordConfirm: ''
    },
    close: () => {},
    edit: false
};

export default UserModal;