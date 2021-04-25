/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { ReactComponent as DataLogo } from '../../assets/data2.svg';

const Metrics = () => {
	return (
		<div className='flex-col '>
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
					<a
						href='#'
						className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800'>
						Get started
					</a>
				</div>
				<div className='ml-3 inline-flex rounded-md shadow '>
					<a
						href='#'
						className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-indigo-50'>
						Learn more
					</a>
				</div>
			</div>
		</div>
	);
};

export default Metrics;
