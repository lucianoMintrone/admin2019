import React, { useState } from 'react';
import { func, shape, string, bool } from 'prop-types';

import Button from '../Button';

import './styles.css';

const validateNewActivePrincipleForm = (newAP, setError, submit) => {
	let errorMessage = '';
	if (newAP.code === '') errorMessage = 'Código es requerido.';
    if (newAP.name === '') errorMessage += ' Nombre es requerido.';
    if (newAP.description === '') errorMessage += ' Descripción es requerido.';
	if (errorMessage === '') submit(newAP);
	setError(errorMessage);
}

const ActivePrincipleModal = ({ onSubmit, activePrinciple, close, edit }) => {
    const [code, setCode] = useState(activePrinciple.code);
    const [name, setName] = useState(activePrinciple.name);
    const [description, setDescription] = useState(activePrinciple.description);
    const [error, setError] = useState('');

    return (
        <div class="popup">
            <div class="flex-sb flex-m">
                <h4>Nuevo Principio Activo</h4>
                <i onClick={close} style={{ cursor: 'pointer' }} class="lni-close"></i>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="single-form form-group">
                        <input value={code} onChange={e => setCode(e.target.value)} type="text" name="code" placeholder="Código" />
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
                        <textarea value={description} onChange={e => setDescription(e.target.value)} name="description" placeholder="Descripción"></textarea>
                    </div>
                </div>
            </div>
            <span style={{ color: '#FF9494' }} class="txt2">
                {error}
            </span>
            <Button title={edit ? 'EDITAR' : 'CREAR'} onClick={() => validateNewActivePrincipleForm({ code, name, description }, setError, onSubmit)} />
        </div>
    );
}

ActivePrincipleModal.propTypes = {
    onSubmit: func,
    activePrinciple: shape({
        code: string,
        name: string,
        description: string
    }),
    close: func,
    edit: bool
};

ActivePrincipleModal.defaultProps = {
    onSubmit: () => {},
    activePrinciple: {
        code: '',
        name: '',
        description: ''
    },
    close: () => {},
    edit: false
};

export default ActivePrincipleModal;
