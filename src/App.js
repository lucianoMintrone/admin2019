import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Main/Home';
import Contact from './Pages/Main/Contact';
import Company from './Pages/Main/Company';
import Products from './Pages/Main/Products';
import Users from './Pages/Main/Users';
import ActivePrinciples from './Pages/Main/ActivePrinciples';

const App = () => (
	<Switch>
		<Route exact path='/' component={Login} />
		<Route path='/register' component={Register} />
		<Route path='/home' component={Home} />
		<Route path='/products' component={Products} />
		<Route path='/company' component={Company} />
		<Route path='/contact' component={Contact} />
		<Route path='/users' component={Users} />
		<Route path='/active-principles' component={ActivePrinciples} />
	</Switch>
);

export default App;
