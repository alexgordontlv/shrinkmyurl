import React, { useState } from 'react';
import { useModalContext } from '../../context/modal.context';
const Footer = () => {
	const [link, setLink] = useState('');
	const [fetching, setFetching] = useState(false);
	const { setOpenModal } = useModalContext();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!link) {
			setOpenModal('Please provide a valid email');
			return;
		}
		setFetching(false);
	};

	return (
		<div className='flex justify-center mt-10'>
			<div className='flex-col w-8/12'>
				<div className=' '>
					<form onSubmit={handleSubmit} className='flex '>
						<input
							value={link}
							type='text'
							onChange={(e) => setLink(e.target.value)}
							className={` border-solid border w-11/12 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
							placeholder='Enter email to get more info'
						/>
						<button type='submit' className={` bg-black text-white px-3 py-2 rounded   hover:bg-gray-800 ml-3`}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								style={{ color: '#15bbca' }}>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									className='ml-5'
									d='M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z'
								/>
							</svg>
						</button>
					</form>
				</div>
				<div className='flex text-center justify-evenly w-full mt-10'>
					<p>LinkedIn</p> .<p>FaceBook</p> .<p>Instragram</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
