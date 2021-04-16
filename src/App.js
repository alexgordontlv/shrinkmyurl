import React, { useEffect } from 'react';
import Header from './components/header/Header';
import Mainpage from './pages/main/Mainpage';
import './app.styles.css';

import { BrowserRouter as Router } from 'react-router-dom';
import { useUserContext } from './context/user.context';

function App() {
	const context = useUserContext();
	useEffect(() => {
		const loggedInUser = localStorage.getItem('currentUser');
		if (loggedInUser) {
			const foundUser = JSON.parse(loggedInUser);
			context.setCurrentUser(foundUser);
		}
	}, []);

	return (
		<Router>
			<div className='app'>
				<Header />
				<Mainpage />
			</div>
		</Router>
	);
}

export default App;
