import React from 'react';

import '../assets/css/animate.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/styles.css';
import '../assets/css/LineIcons.css';
import './styles.css';

import Header from '../../../Components/Header';
import Button from '../../../Components/Main/Button';

const Contact = () => (
	<div>
		<Header activeSection="contact" />
		<section id="contact" class="contact-area pt-115">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-lg-6">
						<div class="contact-title text-center">
							<h2 class="title">Estar en Contacto</h2>
						</div>
					</div>
				</div>
				<div class="contact-box mt-70">
					<div class="row">
						<div class="col-lg-4">
							<div class="contact-info pt-25">
								<h4 class="info-title">Datos de Contacto</h4>
								<ul>
									<li>
										<div class="single-info mt-30">
											<div class="info-icon">
												<i class="lni-phone-handset"></i>
											</div>
											<div class="info-content">
												<p>+54 911 5963 8737</p>
											</div>
										</div>
									</li>
									<li>
										<div class="single-info mt-30">
											<div class="info-icon">
												<i class="lni-envelope"></i>
											</div>
											<div class="info-content">
												<p>contact@furnish.com</p>
											</div>
										</div>
									</li>
									<li>
										<div class="single-info mt-30">
											<div class="info-icon">
												<i class="lni-home"></i>
											</div>
											<div class="info-content">
												<p>Av. Cabildo 4565, CABA, Argentina</p>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div> 
						<div class="col-lg-8">
							<div class="contact-form">
								<form id="contact-form" data-toggle="validator">
									<div class="row">
										<div class="col-lg-6">
											<div class="single-form form-group">
												<input type="text" name="name" placeholder="Ingresá tu Nombre" data-error="Name is required." required="required" />
												<div class="help-block with-errors"></div>
											</div>
										</div>
										<div class="col-lg-6">
											<div class="single-form form-group">
												<input type="email" name="email" placeholder="Ingresá tu Email"  data-error="Valid email is required." required="required" />
												<div class="help-block with-errors"></div>
											</div>
										</div>
										<div class="col-lg-12">
											<div class="single-form form-group">
												<textarea name="message" placeholder="Ingresá tu Mensaje" data-error="Please,leave us a message." required="required"></textarea>
												<div class="help-block with-errors"></div>
											</div>
										</div>
										<p class="form-message"></p>
										<Button title="CONTACTAR YA" onClick={e => e.preventDefault()} />
									</div>
								</form>
							</div>
						</div> 
					</div>
				</div>
			</div>
		</section>
	</div>
);

export default Contact;
