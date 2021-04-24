import React from 'react';
import { LockClosedIcon } from '@heroicons/react/solid';
import LinkForm from '../../components/linkform/LinkForm';
const MainBody = () => {
	return (
		<div className='grid grid-rows-3 grid-flow-col gap-4'>
			<div className='row-span-3 bg-red-100'>
				<LinkForm />
				<LinkForm />
				<LinkForm />
			</div>
			<div className='col-span-2 bg-red-200'>
				<LinkForm />
			</div>
			<div className='row-span-2 col-span-2 bg-red-300'>
				<LinkForm />
				<LinkForm />

				<LinkForm />
			</div>
		</div>
	);
};

export default MainBody;
