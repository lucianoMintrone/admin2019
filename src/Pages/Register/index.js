import React, { useState } from 'react';

import Input from '../../Components/Login/Input';
import Button from '../../Components/Login/Button';

import '../../assets/css/utils.css';
import './styles.css';

const addUser = (newUser) => {
    const users = JSON.parse(localStorage.getItem('users'));
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(newUser));
};

const validateRegisterForm = (email, password, firstname, lastname, confirmPassword, setError, history) => {
    let errorMessage = '';
    if (firstname === '') errorMessage = 'Nombre es requerido.';
    if (lastname === '') errorMessage += ' Apellido es requerido.';
	if (!RegExp(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/).test(email)) {
		errorMessage = 'Email inválido.';
	} 
	if (password.length < 6) {
		errorMessage += ' Contraseña demasiado corta (min 6).';
    }
    if (password !== confirmPassword) {
		errorMessage += ' Las contraseñas no coinciden.';
	}
	if (errorMessage === '') {
        addUser({ email, password, type: 'client' });
		history.push('/home');
	}
	setError(errorMessage);
}

const Register = ({ history }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
	const [error, setError] = useState('');
    
    return (
        <div class="limiter">
            <div class="container-login100">
                <div class="wrap-login100">
                    <form class="login100-form validate-form" onSubmit={e => { e.preventDefault(); validateRegisterForm(email, password, firstname, lastname, confirmPassword, setError, history); }}>
                        <span class="login100-form-title p-b-43">
                            Registro Cliente
                        </span>
                        <Input
                            placeholder="Nombre"
                            name="firstname"
                            value={firstname}
							onChange={({ target: { value } }) => setFirstname(value)}
                        />
                        <Input
                            placeholder="Apellido"
                            name="lastname"
                            value={lastname}
							onChange={({ target: { value } }) => setLastname(value)}
                        />
                        <Input
                            placeholder="Email"
                            name="email"
                            value={email}
							onChange={({ target: { value } }) => setEmail(value)}
                        />
                        <Input
                            placeholder="Contraseña"
                            name="pass"
                            type="password"
                            value={password}
							onChange={({ target: { value } }) => setPassword(value)}
                        />
                        <Input
                            placeholder="Repite Contraseña"
                            name="pass2"
                            type="password"
                            value={confirmPassword}
							onChange={({ target: { value } }) => setConfirmPassword(value)}
                        />
                        <Button
                            title="Registrarse"
                            onClick={() => validateRegisterForm(email, password, firstname, lastname, confirmPassword, setError, history)}
                        />

                        <div class="text-center p-t-46 p-b-20">
							<span style={{ color: '#FF9494' }} class="txt2">
								{error}
							</span>
						</div>
                    </form>
                    <div class="login100-more"></div>
                </div>
            </div>
        </div>

    );
}

export default Register;
