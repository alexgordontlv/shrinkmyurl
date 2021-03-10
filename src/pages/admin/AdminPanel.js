import React, { useEffect, useState } from 'react';
import UserCard from '../../components/usercard/UserCard';
import axios from '../../utilities/axios/axios';
import './adminpanel.styles.css';

const AdminPanel = () => {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		const fetchUsers = async () => {
			const response = await axios.get('/users');
			setUsers(response.data);
		};
		fetchUsers();
	}, []);

	return (
		<div className='adminpanel'>
			{users.map((user) => (
				<UserCard key={user.id} location={{ state: { name: user.name, email: user.email } }} />
			))}
		</div>
	);
};

export default AdminPanel;
