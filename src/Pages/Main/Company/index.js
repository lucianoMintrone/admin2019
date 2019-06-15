import React from 'react';

import '../assets/css/styles.css';
import '../assets/css/animate.css';
import '../assets/css/bootstrap.min.css';

import Header from '../../../Components/Header';

const Company = () => (
	<div>
		<Header activeSection="company" />
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-6">
					<div class="contact-title text-center">
						<h2 class="title">Quiénes somos?</h2>
					</div>
				</div>
			</div>
			<div class="row justify-content-center">
				<div class="col-lg-6">
					<div class="contact-title text-center">
						<p>Somos un grupo de profecionales de la salud, dedicados a mejorarle la experiencia a nuestros clientes.
						Brindando productos de primera calidad</p>
					</div>
				</div>
			</div>

			<div class="row justify-content-center">
				<div class="col-lg-6">
					<div class="contact-title text-center">
						<h2 class="title">Misión</h2>
					</div>
				</div>
			</div>
			<div class="row justify-content-center">
				<div class="col-lg-6">
					<div class="contact-title text-center">
						<p>Brindarle a la comunidad con soluciones de la salud de vanguardia.
						De forma transparente y segura</p>
					</div>
				</div>
			</div>

			<div class="row justify-content-center">
				<div class="col-lg-6">
					<div class="contact-title text-center">
						<h2 class="title">Visión</h2>
					</div>
				</div>
			</div>
			<div class="row justify-content-center">
				<div class="col-lg-6">
					<div class="contact-title text-center">
						<p>Que la comunidad no tenga que preocuparse por temas de salud
						y puedan vivir su vida plenamente sin preocupaciones</p>
					</div>
				</div>
			</div>

			<div class="row justify-content-center">
				<div class="col-lg-6">
					<div class="contact-title text-center">
						<h2 class="title">Valores</h2>
					</div>
				</div>
			</div>
			<div class="row justify-content-center">
				<div class="col-lg-6">
					<div class="contact-title text-center">
						<p>Excelencia,
						Transparencia,
						Vanguardia</p>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default Company;
