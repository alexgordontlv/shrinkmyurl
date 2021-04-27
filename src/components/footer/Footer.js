import React, { useState } from 'react';
import { useModalContext } from '../../context/modal.context';
const Footer = () => {
	console.log('footer');
	const [link, setLink] = useState('');
	const [fetching, setFetching] = useState(false);
	const { setOpenModal } = useModalContext();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!link || !link.includes('@')) {
			setOpenModal('Please provide a valid email');
			return;
		}
		setFetching(true);
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
								className={`h-6 w-6 ${fetching && 'animate-pulse'}`}
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
				<div className='flex text-center align-center justify-evenly w-full mt-10'>
					<p>LinkedIn</p>{' '}
					<svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
						<path
							fillRule='evenodd'
							d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z'
							clipRule='evenodd'
						/>
					</svg>
					<p>FaceBook</p>{' '}
					<svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
						<path
							fillRule='evenodd'
							d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z'
							clipRule='evenodd'
						/>
					</svg>
					<p>Instragram</p>
				</div>
			</div>
		</div>
	);
};

export default React.memo(Footer);
