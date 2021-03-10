import React, { useEffect, useState } from 'react';
import UserCard from '../../components/usercard/UserCard';
import axios from '../../utilities/axios/axios';
import './adminpanel.styles.css';
import Spinner from '../../components/spinner/Spinner';

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
			{!users.length ? <Spinner /> : users.map((user) => <UserCard key={user.id} location={{ state: { name: user.name, email: user.email , id: user.id, role: user.role} }} />)}
		</div>
	);
};

export default AdminPanel;
