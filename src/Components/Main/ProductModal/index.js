import React, { useState } from 'react';

import Button from '../Button';

import './styles.css';

const validateNewProductForm = (newProduct, setError, submit) => {
	let errorMessage = '';
	if (newProduct.code === '') errorMessage = 'Código es requerido.';
    if (newProduct.name === '') errorMessage += ' Nombre es requerido.';
    if (newProduct.price === '') errorMessage += ' Precio es requerido.';
    if (newProduct.size === '') errorMessage += ' Tamaño es requerido.';
    if (newProduct.description === '') errorMessage += ' Descripción es requerido.';
    if (!newProduct.image) errorMessage += ' Imagen es requerido.';
	if (errorMessage === '') submit(newProduct);
	setError(errorMessage);
}

const ProductModal = ({ onSubmit, close }) => {
    const [code, setCode] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [size, setSize] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(undefined);
    const [activePrinciple, setActivePrinciple] = useState('');
    const [error, setError] = useState('');

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
            <div class="row">
                <div class="col-lg-12">
                    <div class="single-form form-group">
                        <textarea value={description} onChange={e => setDescription(e.target.value)} name="description" placeholder="Descripción"></textarea>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <input onChange={e => setImage(URL.createObjectURL(e.target.files[0]))} type="file" name="image" placeholder="Imagen" />
                </div>
            </div>
            <span style={{ color: '#FF9494' }} class="txt2">
                {error}
            </span>
            <Button title="CREAR" onClick={() => validateNewProductForm({ code, name, price, size, description, image, activePrinciple }, setError, onSubmit)} />
        </div>
    );
}

export default ProductModal
