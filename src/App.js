import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './Pages/Login';
import Home from './Pages/Home';
import Register from './Pages/Register';

const App = () => (
	<Switch>
		<Route exact path='/' component={Login} />
		<Route path='/home' component={Home} />
		<Route path='/register' component={Register} />
	</Switch>
);

export default App;
