import React from 'react';
import { Link } from 'react-router-dom'

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
					
					
					<div class="wrap-input100 validate-input">
						<input class="input100" type="text" name="email" />
						<span class="focus-input100"></span>
						<span class="label-input100">Email</span>
					</div>
					
					
					<div class="wrap-input100 validate-input">
						<input class="input100" type="password" name="pass" />
						<span class="focus-input100"></span>
						<span class="label-input100">Password</span>
					</div>

					<div class="container-login100-form-btn">
						<Link to="/home" class="login100-form-btn no-style-link link-white-text">
							Login
						</Link>
					</div>
				</form>

				<div class="login100-more" style={{ backgroundImage: "url('../../assets/images/bg-01.jpg')" }}>
				</div>
			</div>
		</div>
	</div>
);

export default Login;
