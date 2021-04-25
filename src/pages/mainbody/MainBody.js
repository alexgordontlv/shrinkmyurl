import React from 'react';
import { LockClosedIcon } from '@heroicons/react/solid';
import LinkForm from '../../components/linkform/LinkForm';
import { ReactComponent as DataLogo } from '../../assets/data2.svg';

const MainBody = () => {
	return (
		<div className='flex  justify-center'>
			<div className='grid grid-cols-1 max-w-5xl md:grid-cols-3 md:grid-rows-4 gap-2 '>
				<div className=' col-span-2 z-20'>
					<LinkForm className='' />
				</div>
				<div className=' row-span-3  bg-red-200 '>
					<LinkForm />
				</div>
				<div className='row-span-2 col-span-2 flex justify-center items-center'>
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
				</div>

				<div className='row-span-3 col-span-4 bg-red-600'>
					<LinkForm />
				</div>
			</div>
		</div>
	);
};

export default MainBody;
