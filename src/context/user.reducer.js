import axios from '../utilities/axios/axios';

export const contextReducer = (state, action) => {
	console.log(action.payload);
	switch (action.type) {
		case 'SET_CURRENT_USER':
			axios.defaults.headers.common['Authorization'] = 'Barear ' + action.payload?.token;
			console.log('header set');
			return {
				currentUser: action.payload,
				isAdmin: action.payload?.role === 'admin' ? true : false,
			};
		default:
			return state;
	}
};
