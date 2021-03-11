import React, { useEffect, useState } from 'react';
import UserCard from '../../components/usercard/UserCard';
import axios from '../../utilities/axios/axios';
import './adminpanel.styles.css';
import Spinner from '../../components/spinner/Spinner';
import Button from '@material-ui/core/Button';
import FormDialog from '../../components/formdialog/FormDialog';
const AdminPanel = () => {
	const [users, setUsers] = useState([]);
	const [render, setRender] = useState(false);
	useEffect(() => {
		const fetchUsers = async () => {
			const response = await axios.get('/users');
			setUsers(response.data);
		};
		fetchUsers(users);
	}, [render]);

	return (
		<div className='adminpanel'>
			<FormDialog addUser />

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
	);
};

export default AdminPanel;
