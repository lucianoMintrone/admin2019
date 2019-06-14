import React from 'react';

import Input from '../../Components/Input';
import Button from '../../Components/Button';

import '../../assets/css/utils.css';
import './styles.css';

const Register = () => (
	<div class="limiter">
        <div class="container-login100">
            <div class="wrap-login100">
                <form class="login100-form validate-form">
                    <span class="login100-form-title p-b-43">
                        Registro Cliente
                    </span>
                    <Input
                        placeholder="Nombre"
                        name="firstname"
                    />
                    <Input
                        placeholder="Apellido"
                        name="lastname"
                    />
                    <Input
                        placeholder="Email"
                        name="email"
                    />
                    <Input
                        placeholder="Contraseña"
                        name="pass"
                        type="password"
                    />
                    <Input
                        placeholder="Repite Contraseña"
                        name="pass2"
                        type="password"
                    />
                    <Button
                        title="Registrarse"
                        to="/"
                    />
                </form>
                <div class="login100-more"></div>
            </div>
        </div>
    </div>
);

export default Register;
