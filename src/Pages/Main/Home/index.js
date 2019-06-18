import React from 'react';

import '../assets/css/styles.css';
import '../assets/css/animate.css';
import '../assets/css/bootstrap.min.css';

import Header from '../../../Components/Header';

const Home = () => (

	<div>
		<Header activeSection="home" />
		<section class="hero">
        <div class="hero-inner">
            <h1>Bienvenidos a Furnish!</h1>
        </div>
    </section>
	</div>
);

export default Home;
