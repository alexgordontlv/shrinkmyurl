import React, { createContext, useContext, useState, useReducer } from 'react';
import { contextReducer } from './user.reducer';

const UserContext = createContext();

export const useUserContext = () => {
	return useContext(UserContext);
};
const initialState = {
	currentUser: null,
	isAdmin: false,
};

export const UserProvider = ({ children }) => {
	const [state, dispatch] = useReducer(contextReducer, initialState);
	console.log(state);
	const setCurrentUser = (user) => {
		dispatch({ type: 'SET_CURRENT_USER', payload: user });
	};

	return <UserContext.Provider value={{ state, setCurrentUser }}>{children}</UserContext.Provider>;
};