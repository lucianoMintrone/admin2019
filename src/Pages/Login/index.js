import React, { useState } from 'react';

import Input from '../../Components/Input';
import Button from '../../Components/Button';

import '../../utils.css';
import './styles.css';

const validateLoginForm = (email, password, setError) => {
	if (!RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/).test(email)) {
		if (password.length < 6) {
			setError('Email inválido. Contraseña demasiado corta (min 6).');
			return;
		} else {
			setError('Email inválido.');
			return;
		}
	} else {
		if (password.length < 6) {
			setError('Contraseña demasiado corta (min 6).');
			return;
		}
	}
	setError('');
}

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	return (
		<div class="limiter">
			<div class="container-login100">
				<div class="wrap-login100">
					<form class="login100-form validate-form">
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
							onClick={() => validateLoginForm(email, password, setError)}
						/>

						<div class="text-center p-t-46 p-b-20">
							<span style={{ color: '#FF9494' }} class="txt2">
								{error}
							</span>
						</div>
					</form>
					<div class="login100-more" style={{ backgroundImage: "url('../../assets/images/bg-01.jpg')" }}>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
