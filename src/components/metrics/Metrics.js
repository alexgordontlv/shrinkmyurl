/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { ReactComponent as DataLogo } from '../../assets/data2.svg';
import { Link } from 'react-router-dom';

const Metrics = () => {
	return (
		<div className='flex-col mt-10'>
			<h2 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
				<span className='block'>Get metrics for every link!</span>
				<span className='block' style={{ color: '#15bbca' }}>
					Start your free membership today.
				</span>
			</h2>
			<div className='flex justify-center items-center'>
				<DataLogo className='w-96 h-96' />
			</div>
			<div className='mt-5 flex lg:mt-0 lg:flex-shrink-0 justify-center items-center'>
				<div className='inline-flex rounded-md shadow'>
					<Link to='/register'>
						<button className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800'>
							Get started
						</button>
					</Link>
				</div>
				<div className='ml-3 inline-flex '>
					<a href='#' className='inline-flex items-center justify-center px-5 py-3 text-base font-medium  text-black hover:underline'>
						Learn more
						<svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								className='ml-5'
								d='M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z'
							/>
						</svg>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Metrics;
