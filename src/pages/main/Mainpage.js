import React, { Suspense } from 'react';

import './mainpage.styles.css';
import Login from '../login/Login';
import Register from '../register/Register';
import { Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from '../../components/privateroute/PrivateRoute';
import UserCard from '../../components/usercard/UserCard';
import Spinner from '../../components/spinner/Spinner';
import { useUserContext } from '../../context/user.context';

const AdminPanel = React.lazy(() => import('../admin/AdminPanel'));

const Mainpage = () => {
	const {
		state: { currentUser },
	} = useUserContext();
	return (
		<div className='main'>
			<Switch>
				<Suspense fallback={<Spinner />}>
					<Route exact path='/login' render={(props) => (!currentUser ? <Login /> : <Redirect to='/' />)} />
					<Route exact path='/register'>
						s
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
