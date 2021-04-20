import React, { useState } from 'react';
import axios from '../../utilities/axios/axios';
import { useModalContext } from '../../context/modal.context';

const LinkForm = () => {
	const { setOpenModal } = useModalContext();
	const [link, setLink] = useState('');
	const [fetching, setFetching] = useState(false);
	const [readonly, setReadonly] = useState(false);
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
			setReadonly(true);
		} catch (error) {
			console.log(error.message);
		}
		setFetching(false);
	};

	return (
		<div className='shadow-md rounded to  md:w-6/12 max-w-3xl	 bg-gray-50 border-solid  p-6 my-2'>
			<h2 className=' text-center text-3xl font-extrabold text-gray-900'>Shrink My Link:</h2>
			<form onSubmit={handleSubmit}>
				<input
					readOnly={readonly}
					value={link}
					type='text'
					onChange={(e) => setLink(e.target.value)}
					className={`mt-4 border-solid border w-full rounded px-3 py-2`}
					placeholder='Email'
				/>

				<button type='submit' className={` bg-black text-white px-3 py-2 rounded w-full mt-4 hover:bg-gray-800`}>
					{fetching ? <p className='animate-pulse'>Please wait... </p> : 'Shrink it'}
				</button>
			</form>
		</div>
	);
};

export default LinkForm;
