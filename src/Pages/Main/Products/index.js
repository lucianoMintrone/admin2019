import React, { Fragment, useState } from 'react';
import ProductModal from '../../../Components/Main/ProductModal';

import '../assets/css/animate.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/styles.css';
import './styles.css';

import Header from '../../../Components/Header';
import Product from '../../../Components/Main/Product';
import Button from '../../../Components/Main/Button';

const Products = () => {
	const [ products, setProducts ] = useState(JSON.parse(localStorage.getItem('products')) || []);
	const [ searchText, setSearchText ] = useState('');
	const [ showCreateModal, setShowCreateModal ] = useState({ product: undefined, open: false });

	const currentUser = JSON.parse(localStorage.getItem('currentUser'));
	const userIsAdmin = () => {
		return currentUser && currentUser.type === 'admin';
	}

	const onSubmitNewProduct = (newProduct) => {
		let index = products.findIndex(product => product.code === newProduct.code);
		let currentProducts;
		if (index > -1) {
			products.splice(index, 1, newProduct);
			currentProducts = [ ...products ];
		} else {
			currentProducts = [ ...products, newProduct ];
		}
		setProducts(currentProducts);
		localStorage.setItem('products', JSON.stringify(currentProducts));
		setShowCreateModal({ product: undefined, open: false });
	}

	const deleteProduct = (code) => {
		const index = products.findIndex(product => product.code === code);
		products.splice(index, 1);
		setProducts([ ...products ]);
		localStorage.setItem('products', JSON.stringify([ ...products ]));
	}

	const search = () => {
		const products = JSON.parse(localStorage.getItem('products'));
		const searchingText = searchText.toLowerCase();
		if (searchingText === '') setProducts(products);
		else {
			const findedProducts = products.filter(product => {
				return product.code === searchingText
					|| product.name.toLowerCase().includes(searchingText)
					|| product.description.toLowerCase().includes(searchingText)
					|| product.price === searchingText
					|| product.size.toLowerCase().includes(searchingText)
					|| product.activePrinciple.code === searchingText
					|| product.activePrinciple.name.toLowerCase().includes(searchingText)
					|| product.activePrinciple.description.toLowerCase().includes(searchingText)
			});
			setProducts(findedProducts);
		}
	}

	return (
		<Fragment>
			{
				showCreateModal.open && (
					<ProductModal
						close={() => setShowCreateModal({ product: undefined, open: false })}
						product={showCreateModal.product}
						edit={!!showCreateModal.product}
						onSubmit={onSubmitNewProduct}
					/>
				)
			}
			<Header activeSection="products" />
			<section id="product" class="product-area pt-100 pb-130">
				<div class="container">
					<div class="row">
						<div class="col-lg-4">
							<div class="single-form form-group">
								<input value={searchText} onChange={e => setSearchText(e.target.value)} type="text" name="search" placeholder="Buscar..." />
							</div>
						</div>
						<div class="single-form form-group">
							<i onClick={search} class="lni-search size-md" style={{ cursor: 'pointer', paddingTop: 10 }}></i>
						</div>
					</div>
					<div class="row" style={{ marginTop: 30 }}>
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
													activePrinciple={activePrinciple.name}
													onDelete={deleteProduct}
													onClick={() => setShowCreateModal({
														product: { code, name, description, image, price, size, activePrinciple: activePrinciple.code },
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
