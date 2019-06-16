import React, { Fragment, useState } from 'react';

import Header from '../../../Components/Header';
import ActivePrincipleModal from '../../../Components/Main/ActivePrincipleModal';

const addActivePrinciples = (newAP) => {
	const currentAPs = JSON.parse(localStorage.getItem('products'));
	let newAPs;
	if (currentAPs) newAPs = [ ...currentAPs, newAP ];
	else newAPs = [ newAP ];
	localStorage.setItem('activePrinciples', JSON.stringify(newAPs));
}

const ActivePrinciples = () => {
    const [ activePrinciples, setActivePrinciple ] = useState(JSON.parse(localStorage.getItem('activePrinciples')) || []);
	const [ showCreateModal, setShowCreateModal ] = useState({ activePrinciple: undefined, open: false });

	const onSubmitNewActivePrinciple = (newAP) => {
		addActivePrinciples(newAP)
		let index = activePrinciples.findIndex(ap => ap.code === newAP.code);
		if (index > -1) {
			activePrinciples.splice(index, 1, newAP);
			setActivePrinciple([ ...activePrinciples ]);
		} else {
			setActivePrinciple([ ...activePrinciples, newAP ]);
		}
		setShowCreateModal({ activePrinciple: undefined, open: false });
	}

	const deleteActivePrinciple = (code) => {
		const index = activePrinciples.findIndex(product => product.code === code);
		activePrinciples.splice(index, 1);
		setActivePrinciple([ ...activePrinciples ]);
		localStorage.setItem('activePrinciples', JSON.stringify([ ...activePrinciples ]));
    }

    return (
        <Fragment>
			{
				showCreateModal.open && (
					<ActivePrincipleModal
						close={() => setShowCreateModal({ activePrinciple: undefined, open: false })}
						activePrinciple={showCreateModal.activePrinciple}
						edit={showCreateModal.activePrinciple}
						onSubmit={onSubmitNewActivePrinciple}
					/>
				)
			}
			<Header activeSection="activePrinciples" />
            <table class="table">
                <thead class="thead-light">
                    <tr>
                        <th scope="col">Código</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Descripción</th>
                        <th scope="col" style={{ cursor: 'pointer' }} onClick={() => setShowCreateModal({ activePrinciple: undefined, open: true })}><i class="lni-plus"></i></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        activePrinciples.map(ap => (
                            <tr style={{ cursor: 'pointer' }} onClick={() => setShowCreateModal({ activePrinciple: ap, open: true })}>
                                <td>{ap.code}</td>
                                <td>{ap.name}</td>
                                <td>{ap.description}</td>
                                <td onClick={e => { e.stopPropagation(); deleteActivePrinciple(ap.code); }} style={{ cursor: 'pointer', color: 'red' }}><i class="lni-trash"></i></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
		</Fragment>
    );
};

export default ActivePrinciples;
