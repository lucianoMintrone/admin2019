import React from 'react';
import { string } from 'prop-types';

import { Link } from 'react-router-dom';

import './styles.css';

const Header = ({ activeSection }) => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
	const userIsAdmin = () => {
		return currentUser && currentUser.type === 'admin';
    }

    return (
        <header class="header-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <nav class="navbar navbar-expand-lg">
                            <a class="navbar-brand">
                                <img src={require("../../assets/images/logo.png")} alt="Logo" />
                            </a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="bar-icon"></span>
                                <span class="bar-icon"></span>
                                <span class="bar-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul id="nav" class="navbar-nav ml-auto">
                                    {
                                        !userIsAdmin() && (
                                            <li class={`nav-item ${activeSection === 'home' && 'active'}`}>
                                                <Link to="/home" data-scroll-nav="0">Home</Link>
                                            </li>
                                        )
                                    }
                                    <li class={`nav-item ${activeSection === 'products' && 'active'}`}>
                                        <Link to="/products" data-scroll-nav="0">Productos</Link>
                                    </li>
                                    {
                                        userIsAdmin() && (
                                            <li class={`nav-item ${activeSection === 'activePrinciples' && 'active'}`}>
                                                <Link to="/active-principles" data-scroll-nav="0">Principios Activos</Link>
                                            </li>
                                        )
                                    }
                                    {
                                        userIsAdmin() && (
                                            <li class={`nav-item ${activeSection === 'users' && 'active'}`}>
                                                <Link to="/users" data-scroll-nav="0">Usuarios</Link>
                                            </li>
                                        )
                                    }
                                    {
                                        !userIsAdmin() && (
                                            <li class={`nav-item ${activeSection === 'company' && 'active'}`}>
                                                <Link to="/company" data-scroll-nav="0">Empresa</Link>
                                            </li>
                                        )
                                    }
                                    {
                                        !userIsAdmin() && (
                                            <li class={`nav-item ${activeSection === 'contact' && 'active'}`}>
                                                <Link to="/contact" data-scroll-nav="0">Contacto</Link>
                                            </li>
                                        )
                                    }
                                    {
                                        userIsAdmin()
                                            ? (
                                                <li class={`nav-item ${activeSection === 'faq' && 'active'}`}>
                                                    <Link to="/admin-faq" data-scroll-nav="0">FAQ</Link>
                                                </li>
                                            )
                                            : (
                                                <li class={`nav-item ${activeSection === 'faq' && 'active'}`}>
                                                    <Link to="/client-faq" data-scroll-nav="0">FAQ</Link>
                                                </li>
                                            )
                                    }
                                    <li class="nav-item">
                                        <Link to="/" data-scroll-nav="0">
                                            <i class="lni-exit"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

Header.propTypes = {
    activeSection: string.isRequired
};

export default Header;