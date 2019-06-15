import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Input from '../../Components/Login/Input';
import Button from '../../Components/Login/Button';

import '../../assets/css/utils.css';
import './styles.css';

const persistCurrentUser = user => {
	localStorage.setItem('currentUser', user);
};

const userIsValid = (email, password) => {
	const users = JSON.parse(localStorage.getItem('users'));
	return users.find(({ email: e, password: p }) => e === email && p === password);
};

const validateLoginForm = (email, password, setError, history) => {
	let errorMessage = '';
	if (!RegExp(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/).test(email)) {
		errorMessage = 'Email inválido.';
	} 
	if (password.length < 6) {
		errorMessage += ' Contraseña demasiado corta (min 6).';
	}
	if (errorMessage === '') {
		const user = userIsValid(email, password);
		if (user) {
			persistCurrentUser(user)
			history.push('/home');
		}
		errorMessage = ' Email o contraseña inválido.';
	}
	setError(errorMessage);
}

const Login = ({ history }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	return (
		<div class="limiter">
			<div class="container-login100">
				<div class="wrap-login100">
					<form class="login100-form validate-form" onSubmit={e => { e.preventDefault(); validateLoginForm(email, password, setError, history); }}>
						<span class="login100-form-title p-b-43">
							Inicie Sesión para continuar
						</span>
						<Input
							placeholder="Email"
							name="email"
							value={email}
							onChange={({ target: { value } }) => setEmail(value)}
						/>
						<Input
							placeholder="Contraseña"
							name="pass"
							value={password}
							type="password"
							onChange={({ target: { value } }) => setPassword(value)}
						/>
						<Button
							title="Iniciar Sesión"
							onClick={() => validateLoginForm(email, password, setError, history)}
						/>

						<div class="text-center p-t-46 p-b-20">
							<span style={{ color: '#FF9494' }} class="txt2">
								{error}
							</span>
						</div>

						<div class="flex-c"><Link to="/register" class="txt1">Registrarse</Link></div>
					</form>
					<div class="login100-more"></div>
				</div>
			</div>
		</div>
	);
}

export default Login;
