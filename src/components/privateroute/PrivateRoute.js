import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useUserContext } from '../../context/user.context';

const PrivateRoute = ({ component: Component, roles, ...rest }) => {
	const {
		state: { currentUser, isAdmin },
	} = useUserContext();
	return (
		<Route
			{...rest}
			render={(props) => {
				if (!currentUser) {
					// not logged in so redirect to login page with the return url
					return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
				}

				// check if route is restricted by role
				if (!isAdmin) {
					// role not authorised so redirect to home page
					return <Redirect to={{ pathname: '/' }} />;
				}

				// authorised so return component
				return <Component {...props} />;
			}}
		/>
	);
};
export default PrivateRoute;
