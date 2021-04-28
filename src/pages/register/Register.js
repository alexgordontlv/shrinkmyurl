import React, { useState } from 'react';
import axios from '../../utilities/axios/axios';
import { useHistory } from 'react-router-dom';
import { useModalContext } from '../../context/modal.context';
import WrapperCard from '../../components/wrappercard/WrapperCard.js';
import CustomInput from '../../components/custominput/CustomInput';
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
			setLoading(false);
			respone && history.push('/login');
		} catch (error) {
			console.log('ERROR:', error);
		}
		setLoading(false);
		setPassword('');
		setEmail('');
		setValidatePassword('');
	};

	return (
		<WrapperCard>
			<h2 className=' text-center text-3xl font-extrabold text-gray-900'>Register</h2>
			<form onSubmit={handleSubmit}>
				<CustomInput value={email} type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
				<CustomInput value={password} type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
				<CustomInput
					value={validatepassword}
					type='password'
					placeholder='Validate Password'
					onChange={(e) => setValidatePassword(e.target.value)}
				/>
				<button type='submit' className={` bg-black text-white px-3 py-2 rounded w-full mt-4 hover:bg-gray-800`}>
					{loading ? <p className='animate-pulse'>Please wait... </p> : 'Register'}
				</button>
			</form>
		</WrapperCard>
	);
};

export default Register;
