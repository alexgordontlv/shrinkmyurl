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
		</div>
	);
};

export default Login;
