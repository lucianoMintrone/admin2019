import React, { useState } from 'react';
import { func, shape, string, bool } from 'prop-types';

import Button from '../Button';

import './styles.css';

const validateNewProductForm = (newProduct, setError, activePrinciples, submit) => {
	let errorMessage = '';
	if (newProduct.code === '') errorMessage = 'Código es requerido.';
    if (newProduct.name === '') errorMessage += ' Nombre es requerido.';
    if (newProduct.price === '') errorMessage += ' Precio es requerido.';
    if (newProduct.size === '') errorMessage += ' Tamaño es requerido.';
    if (newProduct.description === '') errorMessage += ' Descripción es requerido.';
    if (newProduct.activePrinciple === '') errorMessage += ' Principio Activo es requerido.';
    if (newProduct.image === '') errorMessage += ' Imagen es requerido.';
	if (errorMessage === '') submit({ ...newProduct, activePrinciple: activePrinciples.find(ap => ap.code === newProduct.activePrinciple) });
	setError(errorMessage);
}

const ProductModal = ({ onSubmit, product, close, edit }) => {
    const [code, setCode] = useState(product.code);
    const [name, setName] = useState(product.name);
    const [price, setPrice] = useState(product.price);
    const [size, setSize] = useState(product.size);
    const [description, setDescription] = useState(product.description);
    const [image, setImage] = useState(product.image);
    const [activePrinciple, setActivePrinciple] = useState(product.activePrinciple);
    const [error, setError] = useState('');

    const activePrinciples = JSON.parse(localStorage.getItem('activePrinciples')) || [];

    return (
        <div class="popup">
            <div class="flex-sb flex-m">
                <h4>Nuevo Producto</h4>
                <i onClick={close} style={{ cursor: 'pointer' }} class="lni-close"></i>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="single-form form-group">
                        <input value={code} onChange={e => setCode(e.target.value)} type="number" name="code" placeholder="Código" />
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="single-form form-group">
                        <input value={name} onChange={e => setName(e.target.value)} type="text" name="name" placeholder="Nombre" />
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="single-form form-group">
                        <input value={price} onChange={e => setPrice(e.target.value)} type="number" name="price" placeholder="Precio" />
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="single-form form-group">
                        <input value={size} onChange={e => setSize(e.target.value)} type="text" name="size" placeholder="Tamaño" />
                    </div>
                </div>
            </div>
            <select
                style={{ marginTop: 30 }}
                onChange={e => setActivePrinciple(e.target.value)}
                value={activePrinciple}
            >
                <option value="" disabled>Seleccionar Principio Activo</option>
                {
                    activePrinciples.map(ap => (
                        <option
                            key={ap.code}
                            value={ap.code}
                        >
                            {ap.code} - {ap.name}
                        </option>
                    ))
                }
            </select>
            <div class="row">
                <div class="col-lg-12">
                    <div class="single-form form-group">
                        <textarea value={description} onChange={e => setDescription(e.target.value)} name="description" placeholder="Descripción"></textarea>
                    </div>
                </div>
            </div>
            <div class="row" style={{ marginTop: 30 }}>
                <div class="col-lg-12">
                    <input onChange={e => setImage(URL.createObjectURL(e.target.files[0]))} type="file" name="image" placeholder="Imagen" />
                </div>
            </div>
            <span style={{ color: '#FF9494' }} class="txt2">
                {error}
            </span>
            <Button title={edit ? 'EDITAR' : 'CREAR'} onClick={() => validateNewProductForm({ code, name, price, size, description, image, activePrinciple }, setError, activePrinciples, onSubmit)} />
        </div>
    );
}

ProductModal.propTypes = {
    onSubmit: func,
    product: shape({
        code: string,
        name: string,
        description: string,
        image: string,
        price: string,
        size: string,
        activePrinciple: string
    }),
    close: func,
    edit: bool
};

ProductModal.defaultProps = {
    onSubmit: () => {},
    product: {
        code: '',
        name: '',
        description: '',
        image: '',
        price: '',
        size: '',
        activePrinciple: ''
    },
    close: () => {},
    edit: false
};

export default ProductModal
