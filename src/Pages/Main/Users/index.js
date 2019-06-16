import React, { Fragment, useState } from 'react';

import Header from '../../../Components/Header';
import UserModal from '../../../Components/Main/UserModal';

const Users = () => {
    const [ users, setUsers ] = useState(JSON.parse(localStorage.getItem('users')));
    const [ showCreateModal, setShowCreateModal ] = useState({ user: undefined, open: false });

    const onSubmitNewUser = (newUser) => {
        let index = users.findIndex(user => user.email === newUser.email);
        let newUsersArray;
		if (index > -1) {
            users.splice(index, 1, newUser);
            newUsersArray = [ ...users ];
		} else {
            newUsersArray = [ ...users, newUser ];
		}
        setUsers(newUsersArray);
        localStorage.setItem('users', JSON.stringify(newUsersArray));
		setShowCreateModal({ user: undefined, open: false });
	}

	const deleteUser = (email) => {
		const index = users.findIndex(user => user.email === email);
        users.splice(index, 1);
        const newUsersArray = [ ...users ];
        setUsers(newUsersArray);
		localStorage.setItem('users', JSON.stringify(newUsersArray));
	}

    return (
        <Fragment>
            {
				showCreateModal.open && (
					<UserModal
						close={() => setShowCreateModal({ user: undefined, open: false })}
						user={showCreateModal.user}
						edit={showCreateModal.user}
						onSubmit={onSubmitNewUser}
					/>
				)
			}
            <Header activeSection="users" />
            <table class="table">
                <thead class="thead-light">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Email</th>
                        <th scope="col" style={{ cursor: 'pointer' }} onClick={() => setShowCreateModal({ user: undefined, open: true })}><i class="lni-plus"></i></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users
                            .filter(user => user.type === 'admin')
                            .map((user, index) => (
                                <tr key={user.email} style={{ cursor: 'pointer' }} onClick={() => setShowCreateModal({ user: { ...user, passwordConfirm: user.password }, open: true })}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{user.firstname}</td>
                                    <td>{user.lastname}</td>
                                    <td>{user.email}</td>
                                    <td onClick={e => { e.stopPropagation(); deleteUser(user.email); }} style={{ cursor: 'pointer', color: 'red' }}><i class="lni-trash"></i></td>
                                </tr>
                            ))
                    }
                </tbody>
            </table>
        </Fragment>
    );
}

export default Users;
