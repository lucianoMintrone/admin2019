import React, { Fragment } from 'react';

import Header from '../../../Components/Header';

const AdminFAQ = () => (
	<Fragment>
		<Header activeSection="faq" />
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-6">
					<div class="contact-title text-center">
						<h2 class="title">Cómo se usa?</h2>
					</div>
				</div>
			</div>
			<div class="row justify-content-center">
				<div class="col-lg-6">
					<div class="contact-title text-center">
						<p>Esta sección explica el funcionamiento del panel de administración.</p>
					</div>
				</div>
			</div>

			<div class="row justify-content-center">
				<div class="col-lg-6">
					<div class="contact-title text-center">
						<h2 class="title">1) Principios activos</h2>
					</div>
				</div>
			</div>
			<div class="row justify-content-center">
				<div class="col-lg-6">
					<div class="contact-title text-center">
						<p>Ir a la sección principios activos, seleccionar el botón "+".</p>
						<p>Cargar datos del nuevo principio activo: Código, Nombre, Descripción.</p>
						<p>Una vez creado el principio activo se podrá editar o eliminar.</p>
					</div>
				</div>
			</div>

			<div class="row justify-content-center">
				<div class="col-lg-6">
					<div class="contact-title text-center">
						<h2 class="title">2) Productos</h2>
					</div>
				</div>
			</div>
			<div class="row justify-content-center">
				<div class="col-lg-6">
					<div class="contact-title text-center">
						<p>Ir a la sección productos, seleccionar el botón "agregar producto".</p>
						<p>Cargar datos del nuevo producto: Código, Nombre, Precio, Tamaño, Principio Activo, Descripción, Imagen.</p>
						<p>Una vez creado el producto se podrá editar o eliminar.</p>
					</div>
				</div>
			</div>

			<div class="row justify-content-center">
				<div class="col-lg-6">
					<div class="contact-title text-center">
						<h2 class="title">3) Usuarios</h2>
					</div>
				</div>
			</div>
			<div class="row justify-content-center">
				<div class="col-lg-6">
					<div class="contact-title text-center">
						<p>Ir a la sección usuarios, seleccionar el botón "+". </p>
						<p>Cargar datos del nuevo usuario: Nombre, Apellido, Email, Contraseña.</p>
						<p>Una vez creado el usuario se podrá editar o eliminar.</p>
					</div>
				</div>
			</div>
		</div>
	</Fragment>
);

export default AdminFAQ;