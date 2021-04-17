import React, { Suspense } from 'react';

import './mainpage.styles.css';
import Login from '../login/Login';
import MainBody from '../mainbody/MainBody';
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
					<Route exact path='/' component={MainBody} />
					<Route path='/login' render={(props) => (!currentUser ? <Login /> : <Redirect to='/' />)} />
					<Route path='/register'>
						<Register />
					</Route>
					<PrivateRoute path='/admin-panel' admin component={AdminPanel} />
					<PrivateRoute path='/profile' component={UserCard} />
				</Suspense>
			</Switch>
		</div>
	);
};

export default Mainpage;
