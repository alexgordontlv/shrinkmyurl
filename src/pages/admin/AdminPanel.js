import React, { useEffect, useState } from 'react';
import UserCard from '../../components/usercard/UserCard';
import axios from '../../utilities/axios/axios';
import './adminpanel.styles.css';
import Spinner from '../../components/spinner/Spinner';

import FormDialog from '../../components/formdialog/FormDialog';
const AdminPanel = () => {
	const [users, setUsers] = useState([]);
	const [render, setRender] = useState(false);

	const fetchUsers = async () => {
		const response = await axios.get('/users');
		setUsers(response.data);
	};

	useEffect(() => {
		fetchUsers();
	}, [render]);

	return (
		<div className='adminpanel'>
			<div className='adminpanel__left'>
				<FormDialog addUser />
			</div>
			<div className='adminpanel__right'>
				{!users.length ? (
					<Spinner />
				) : (
					users.map((user) => (
						<UserCard
							setRender={setRender}
							key={user.id}
							location={{ state: { name: user.name, email: user.email, id: user.id, role: user.role } }}
						/>
					))
				)}
			</div>
		</div>
	);
};

export default AdminPanel;
