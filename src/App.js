import React, { useEffect } from 'react';
import Header from './components/header/Header2';
import Mainpage from './pages/main/Mainpage';
import { BrowserRouter as Router } from 'react-router-dom';
import { useUserContext } from './context/user.context';
import Modal from './components/modal/Modal';
import { handleModal, modalState } from './utilities/uitiltyfunctions/handleModal';
import './app.styles.css';
function App() {
	const context = useUserContext();
	useEffect(() => {
		handleModal('open');
		const loggedInUser = localStorage.getItem('currentUser');
		if (loggedInUser) {
			const foundUser = JSON.parse(loggedInUser);
			context.setCurrentUser(foundUser);
		}
	}, []);

	return (
		<Router>
			<div className='app '>
				<Modal setOpenModal={handleModal} />
				<Header />
				<Mainpage />
			</div>
		</Router>
	);
}

export default App;
