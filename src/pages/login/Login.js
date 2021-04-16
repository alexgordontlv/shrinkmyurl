import React, { useState } from 'react';
import { useUserContext } from '../../context/user.context';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './login.styles.css';
import { useStyles } from './material.styles';
import axios from '../../utilities/axios/axios';
import { useHistory } from 'react-router-dom';
import Spinner from '../../components/spinner/Spinner';

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
		<div className='login'>
			<h3>Sign In</h3>
			{loading ? (
				<Spinner />
			) : (
				<form className='form' noValidate>
					<TextField
						className={classes.textfield}
						label='Email'
						name='userEmail'
						type='email'
						onChange={(e) => setEmail(e.target.value)}
						value={email}
						variant='outlined'
						required
					/>
					<TextField
						className={classes.textfield}
						label='Password'
						name='userPassword'
						value={password}
						type='password'
						variant='outlined'
						required
						onChange={(e) => setPassword(e.target.value)}
					/>
					<Button variant='outlined' onClick={handleSubmit} type='submit' color='primary' className={classes.button}>
						Sign In
					</Button>
				</form>
			)}
			<div className='text-2xl hover:bg-light-blue-400 flex w-full'>
				lsls
				<div className='border border-light-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto'>
					<div className='animate-pulse flex space-x-4'>
						<div className='rounded-full bg-light-blue-400 h-12 w-12'></div>
						<div className='flex-1 space-y-4 py-1'>
							<div className='space-y-2'>
								<div className='h-4 bg-light-blue-400 rounded w-5/6'></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
