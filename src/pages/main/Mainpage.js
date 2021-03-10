import React from 'react';
import './mainpage.styles.css';
import Login from '../login/Login';
import Register from '../register/Register';
import { Switch, Route } from 'react-router-dom';
import AdminPanel from '../admin/AdminPanel';
import PrivateRoute from '../../components/privateroute/PrivateRoute';
import UserCard from '../../components/usercard/UserCard';

const Mainpage = () => {
	return (
		<div className='main'>
			<Switch>
				<Route exact path='/login'>
					<Login />
				</Route>
				<Route exact path='/register'>
					<Register />
				</Route>
				<PrivateRoute exact path='/admin-panel' admin component={AdminPanel} />
				<PrivateRoute exact path='/profile' component={UserCard} />
			</Switch>
		</div>
	);
};

export default Mainpage;
