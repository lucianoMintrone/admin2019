import React, { useState } from 'react';

import '../assets/css/animate.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/styles.css';
import './styles.css';

import Header from '../../../Components/Header';
import Product from '../../../Components/Main/Product';
import Button from '../../../Components/Main/Button';

const productExample = {
	code: 1,
	name: 'Product Name',
	description: 'Descripción del Producto...',
	image: require("../../../assets/images/products/p-2.jpg"),
	price: 100,
	size: '70ml',
	activePrinciple: '?'
};

const Products = () => {
	const [ products, setProducts ] = useState([productExample]);

	return (
		<div>
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
													code={code}
													name={name}
													description={description}
													image={image}
													price={price}
													size={size}
													activePrinciple={activePrinciple}
												/>)
											}
										</div>
										<Button title="AGREGAR PRODUCTO" onClick={() => setProducts([...products, productExample])} />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Products;
