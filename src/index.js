import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import App from './App';

ReactDOM.render((
	<BrowserRouter>
		<App />
	</BrowserRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const users = [
	{ email: 'admin@test.com', password: 'password', firstname: 'Admin', lastname: 'Test', type: 'admin' },
	{ email: 'client@test.com', password: 'password', type: 'client' }
];

localStorage.setItem('users', JSON.stringify(users));
