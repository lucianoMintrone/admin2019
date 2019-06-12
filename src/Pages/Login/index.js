import React from 'react';

import Input from '../../Components/Input';
import Button from '../../Components/Button';

import '../../utils.css';
import './styles.css';

const Login = () => (
	<div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
				<form class="login100-form validate-form">
					<span class="login100-form-title p-b-43">
						Login to continue
					</span>
					<Input
						placeholder="Email"
						name="email"
						onChange={() => {}}
					/>
					<Input
						placeholder="Password"
						name="pass"
						onChange={() => {}}
					/>
					<Button
						title="Login"
						to="/home"
					/>
				</form>
				<div class="login100-more" style={{ backgroundImage: "url('../../assets/images/bg-01.jpg')" }}>
				</div>
			</div>
		</div>
	</div>
);

export default Login;
