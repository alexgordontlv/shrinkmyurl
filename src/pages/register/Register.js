import React, { useState } from 'react';
import axios from '../../utilities/axios/axios';
import { useHistory } from 'react-router-dom';
import { useModalContext } from '../../context/modal.context';

const Register = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [validatepassword, setValidatePassword] = useState('');

	const [loading, setLoading] = useState('');
	let history = useHistory();
	const { setOpenModal } = useModalContext();

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (!email || !password || !validatepassword) {
			setOpenModal('Please fill the form currectly');
			return;
		}
		if (password !== validatepassword) {
			setOpenModal(`Passwords don't match`);
			return;
		}
		try {
			const respone = await axios.post('/register', {
				email,
				password,
			});
			history.push('/login');
		} catch (error) {
			console.log('ERROR:', error);
		}
		setPassword('');
		setEmail('');
		setValidatePassword('');
	};

	return (
		<div className='flex text-center justify-center mt-10'>
			<div className='shadow-md rounded to  w-10/12 md:max-w-xl	 bg-gray-50 border-solid  p-6 my-2'>
				<h2 className=' text-center text-3xl font-extrabold text-gray-900'>Register</h2>
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
					<input
						value={validatepassword}
						type='password'
						className={`mt-4 border-solid border w-full rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
						placeholder='Validate Password'
						onChange={(e) => setValidatePassword(e.target.value)}
					/>
					<button type='submit' className={` bg-black text-white px-3 py-2 rounded w-full mt-4 hover:bg-gray-800`}>
						{loading ? <p className='animate-pulse'>Please wait... </p> : 'Register'}
					</button>
				</form>
			</div>
		</div>
	);
};

export default Register;
