import React, { useState } from 'react';
import axios from '../../utilities/axios/axios';
import { useModalContext } from '../../context/modal.context';
import WrapperCard from '../wrappercard/WrapperCard';
import CustomInput from '../custominput/CustomInput';
import validUrl from 'valid-url';

const LinkForm = () => {
	const { setOpenModal } = useModalContext();
	const [link, setLink] = useState('');
	const [fetching, setFetching] = useState(false);
	const handleSubmit = async (e) => {
		console.log(link);
		e.preventDefault();
		if (!validUrl.isUri(link)) {
			setOpenModal('Please provide a valid URL');
			return;
		}

		setFetching(true);
		try {
			alert('success');
			// const res = await axios.post('/createurl', {
			// 	originalUrl: link,
			// });
			// console.log(res);
			// setLink(`https://www.shrinkmy.site/${res.data.Url.hash}`);
		} catch (error) {
			console.log(error.message);
		}
		setFetching(false);
	};

	return (
		<WrapperCard moreStyle=''>
			<h2 className=' text-center text-3xl font-extrabold text-gray-900'>Shrink My Link:</h2>
			<form onSubmit={handleSubmit}>
				<CustomInput value={link} type='text' onChange={(e) => setLink(e.target.value)} placeholder='Enter Link Here' />
				<button type='submit' className={` bg-black text-white px-3 py-2 rounded w-full mt-4 hover:bg-gray-800`}>
					{fetching ? <p className='animate-pulse'>Please wait... </p> : 'Shrink it'}
				</button>
			</form>
		</WrapperCard>
	);
};

export default React.memo(LinkForm);
