import React from 'react';
import { LockClosedIcon } from '@heroicons/react/solid';
import LinkForm from '../../components/linkform/LinkForm';
const MainBody = () => {
	return (
		<div className='flex  justify-center'>
			<div className='grid grid-cols-1 max-w-5xl md:grid-cols-3 md:grid-rows-4 gap-2 '>
				<div className='col-span-2 bg-red-100'>
					<LinkForm />
				</div>
				<div className=' row-span-3  bg-red-200 '>
					<LinkForm />
				</div>

				<div className='row-span-2 col-span-2 bg-red-300'>
					<LinkForm />
				</div>
				<div className='row-span-3 col-span-4 bg-red-600'>
					<LinkForm />
				</div>
			</div>
		</div>
	);
};

export default MainBody;
