import React, { useState } from 'react';
import { useUserContext } from '../../context/user.context';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './login.styles.css';
import { useStyles } from './material.styles';
import axios from '../../utilities/axios/axios';
import { useHistory } from 'react-router-dom';
import Spinner from '../../components/spinner/Spinner';
//fetching ? <p className='animate-pulse'>Please wait... </p> : 'Shrink it'
const Login = () => {
	const context = useUserContext();
	let history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [loading, setLoading] = useState(false);
	const classes = useStyles();

	const handleSubmit = async (event) => {
		event.preventDefault();
		setLoading(true);
		console.log(axios.defaults);
		console.log(process.env.baseURL);
		try {
			const response = await axios.post('/login', {
				email,
				password,
			});
			context.setCurrentUser(response.data.user);
			localStorage.setItem('currentUser', JSON.stringify(response.data.user));
			history.push('/');
		} catch (error) {
			console.log('ERROR:', error);
		}
		setPassword('');

		setEmail('');
		setLoading(false);
	};

	return (
		<div className='flex text-center justify-center mt-10'>
			<div className='shadow-md rounded to  md:w-6/12 max-w-3xl	 bg-gray-50 border-solid  p-6 my-2'>
				<h2 className=' text-center text-3xl font-extrabold text-gray-900'>Sign In</h2>
				<form onSubmit={handleSubmit}>
					<input
						value={email}
						type='email'
						className={`mt-4 border-solid border w-full rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
						placeholder='Email'
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						value={password}
						type='password'
						className={`mt-4 border-solid border w-full rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
						placeholder='Password'
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button type='submit' className={` bg-black text-white px-3 py-2 rounded w-full mt-4 hover:bg-gray-800`}>
						Button
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
