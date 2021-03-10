import React, { Suspense } from 'react';

import './mainpage.styles.css';
import Login from '../login/Login';
import Register from '../register/Register';
import { Switch, Route } from 'react-router-dom';
//import AdminPanel from '../admin/AdminPanel';
import PrivateRoute from '../../components/privateroute/PrivateRoute';
import UserCard from '../../components/usercard/UserCard';
import Spinner from '../../components/spinner/Spinner';

const AdminPanel = React.lazy(() => import('../admin/AdminPanel'));

const Mainpage = () => {
	return (
		<div className='main'>
			<Switch>
				<Suspense fallback={<Spinner />}>
					<Route exact path='/login'>
						<Login />
					</Route>
					<Route exact path='/register'>
						<Register />
					</Route>
					<PrivateRoute exact path='/admin-panel' admin component={AdminPanel} />
					<PrivateRoute exact path='/profile' component={UserCard} />
				</Suspense>
			</Switch>
		</div>
	);
};

export default Mainpage;
