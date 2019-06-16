import React from 'react';
import { string, func } from 'prop-types';

import './styles.css';

const Product = ({
    code,
    name,
    description,
    image,
    price,
    size,
    activePrinciple,
    onDelete,
    onClick
}) => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
	const userIsAdmin = () => {
		return currentUser && currentUser.type === 'admin';
    }
    
    return (
        <div class="col-md-4">
            <div class="single-product-items" style={{ cursor: 'pointer' }} onClick={userIsAdmin() && onClick}>
                <div class="product-item-image">
                    <a><img src={image} alt="Product" /></a>
                    <div class="product-discount-tag">
                        <p>{code}</p>
                    </div>
                </div>
                <div class="product-item-content text-center mt-30">
                    <h5 class="product-title"><a>{name} - {size}</a></h5>
                    <p class="product-title">{description}</p>
                    <span class="regular-price">${price}</span>
                    {/* <span class="discount-price">$69.00</span> */}
                </div>
                { userIsAdmin() && <button class="delete-button" onClick={e => { e.stopPropagation(); onDelete(code); }}>Delete</button> }
            </div>
        </div>
    );
}

Product.propTypes = {
    code: string.isRequired,
    name: string.isRequired,
    description: string.isRequired,
    image: string.isRequired,
    price: string.isRequired,
    size: string.isRequired,
    activePrinciple: string.isRequired,
    onDelete: func,
    onClick: func
};

Product.defaultProps = {
    onDelete: () => {},
    onClick: () => {}
};

export default Product;
