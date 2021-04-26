import React, { Suspense } from 'react';

import { useUserContext } from '../../context/user.context';
import { Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from '../../components/privateroute/PrivateRoute';
import Spinner from '../../components/spinner/Spinner';

const Login = React.lazy(() => import('../login/Login'));
const MainBody = React.lazy(() => import('../mainbody/MainBody'));
const Register = React.lazy(() => import('../register/Register'));
const UserCard = React.lazy(() => import('../../components/usercard/UserCard'));
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
