export const contextReducer = (state, action) => {
	switch (action.type) {
		case 'SET_CURRENT_USER':
			return {
				currentUser: action.payload,
				isAdmin: action.payload?.role === 'admin' ? true : false,
			};
		default:
			return state;
	}
};
