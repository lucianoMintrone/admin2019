import React, { Fragment, useState } from 'react';
import ProductModal from '../../../Components/Main/ProductModal';

import '../assets/css/animate.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/styles.css';
import './styles.css';

import Header from '../../../Components/Header';
import Product from '../../../Components/Main/Product';
import Button from '../../../Components/Main/Button';

const addProduct = (newProduct) => {
	const currentProducts = JSON.parse(localStorage.getItem('products'));
	let newProducts;
	if (currentProducts) newProducts = [ ...currentProducts, newProduct ];
	else newProducts = [ newProduct ];
	localStorage.setItem('products', JSON.stringify(newProducts));
}

const Products = () => {
	const [ products, setProducts ] = useState(JSON.parse(localStorage.getItem('products')) || []);
	const [ showCreateModal, setShowCreateModal ] = useState({ product: undefined, open: false });

	const currentUser = JSON.parse(localStorage.getItem('currentUser'));
	const userIsAdmin = () => {
		return currentUser && currentUser.type === 'admin';
	}

	const onSubmitNewProduct = (newProduct) => {
		addProduct(newProduct)
		let index = products.findIndex(product => product.code === newProduct.code);
		if (index > -1) {
			products.splice(index, 1, newProduct);
			setProducts([ ...products ]);
		} else {
			setProducts([ ...products, newProduct ]);
		}
		setShowCreateModal({ product: undefined, open: false });
	}

	const deleteProduct = (code) => {
		const index = products.findIndex(product => product.code === code);
		products.splice(index, 1);
		setProducts([ ...products ]);
		localStorage.setItem('products', JSON.stringify([ ...products ]));
	}

	return (
		<Fragment>
			{
				showCreateModal.open && (
					<ProductModal
						close={() => setShowCreateModal({ product: undefined, open: false })}
						product={showCreateModal.product}
						edit={showCreateModal.product}
						onSubmit={onSubmitNewProduct}
					/>
				)
			}
			<Header activeSection="products" />
			<section id="product" class="product-area pt-100 pb-130">
				<div class="container">
					<div class="row">
						<div class="col-lg-9 col-md-8">
							<div class="tab-content">
								<div class="tab-pane fade show active">
									<div class="product-items mt-30">
										<div class="row product-items-active">
											{
												products.map(({
													code,
													name,
													description,
													image,
													price,
													size,
													activePrinciple
												}) => <Product
													key={code}
													code={code}
													name={name}
													description={description}
													image={image}
													price={price}
													size={size}
													activePrinciple={activePrinciple}
													onDelete={deleteProduct}
													onClick={() => setShowCreateModal({
														product: { code, name, description, image, price, size, activePrinciple },
														open: true
													})}
												/>)
											}
										</div>
										{ userIsAdmin() && <Button title="AGREGAR PRODUCTO" onClick={() => setShowCreateModal({ product: undefined, open: true })} /> }
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Fragment>
	);
};

export default Products;
