import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './Pages/Login';
import Home from './Pages/Home';

const App = () => (
	<Switch>
		<Route exact path='/' component={Login} />
		<Route path='/home' component={Home} />
	</Switch>
);

export default App;
