import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Main/Home';
import Contact from './Pages/Main/Contact';
import Company from './Pages/Main/Company';
import Products from './Pages/Main/Products';

const App = () => (
	<Switch>
		<Route exact path='/' component={Login} />
		<Route path='/register' component={Register} />
		<Route path='/home' component={Home} />
		<Route path='/products' component={Products} />
		<Route path='/company' component={Company} />
		<Route path='/contact' component={Contact} />
	</Switch>
);

export default App;
