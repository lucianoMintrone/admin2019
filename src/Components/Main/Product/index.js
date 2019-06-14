import React from 'react';
import { string, number } from 'prop-types';

import './styles.css';

const Product = ({
    code,
    name,
    description,
    image,
    price,
    size,
    activePrinciple
}) => (
    <div class="col-md-4">
        <div class="single-product-items">
            <div class="product-item-image">
                <a><img src={image} alt="Product" /></a>
                <div class="product-discount-tag">
                    <p>{code}</p>
                </div>
            </div>
            <div class="product-item-content text-center mt-30">
                <h5 class="product-title"><a>{name} - {size}</a></h5>
                <p class="product-title">{description}</p>
                <ul class="rating">
                    <li><i class="lni-star-filled"></i></li>
                    <li><i class="lni-star-filled"></i></li>
                    <li><i class="lni-star-filled"></i></li>
                    <li><i class="lni-star-filled"></i></li>
                </ul>
                <span class="regular-price">${price}</span>
                {/* <span class="discount-price">$69.00</span> */}
            </div>
        </div>
    </div>
);

Product.propTypes = {
    code: string.isRequired,
    name: string.isRequired,
    description: string.isRequired,
    image: number.isRequired,
    price: string.isRequired,
    size: string.isRequired,
    activePrinciple: string.isRequired
}

export default Product;
