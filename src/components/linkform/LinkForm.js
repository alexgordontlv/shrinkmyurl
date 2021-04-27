import React, { useState } from 'react';
import axios from '../../utilities/axios/axios';
import { useModalContext } from '../../context/modal.context';

const LinkForm = () => {
	console.log('linkform');
	const { setOpenModal } = useModalContext();
	const [link, setLink] = useState('');
	const [fetching, setFetching] = useState(false);
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!link) {
			setOpenModal('We cannot shrink an empty link, Please provide a link');
			return;
		}

		setFetching(true);
		try {
			const res = await axios.post('/createurl', {
				originalUrl: link,
			});
			setLink(`https://www.shrinkmy.site/${res.data.newUrl.hash}`);
		} catch (error) {
			console.log(error.message);
		}
		setFetching(false);
	};

	return (
		<div className='flex text-center justify-center mt-10'>
			<div className='shadow-md rounded to  w-11/12 md:max-w-xl	 bg-gray-50 border-solid  p-6 my-2'>
				<h2 className=' text-center text-3xl font-extrabold text-gray-900'>Shrink My Link:</h2>
				<form onSubmit={handleSubmit}>
					<input
						value={link}
						type='text'
						onChange={(e) => setLink(e.target.value)}
						className={`mt-4 border-solid border w-full rounded px-3 py-2  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
						placeholder='Enter Link Here'
					/>

					<button type='submit' className={` bg-black text-white px-3 py-2 rounded w-full mt-4 hover:bg-gray-800`}>
						{fetching ? <p className='animate-pulse'>Please wait... </p> : 'Shrink it'}
					</button>
				</form>
			</div>
		</div>
	);
};

export default React.memo(LinkForm);
