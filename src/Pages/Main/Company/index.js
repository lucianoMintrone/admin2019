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
						<p>Somos...</p>
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
						<p>Redactar Misión</p>
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
						<p>Redactar Visión</p>
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
						<p>Redactar Valores</p>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default Company;
