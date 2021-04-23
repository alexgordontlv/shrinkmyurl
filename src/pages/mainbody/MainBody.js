import React from 'react';
import { LockClosedIcon } from '@heroicons/react/solid';
import LinkForm from '../../components/linkform/LinkForm';
const MainBody = () => {
	return (
		<div className='grid grid-rows-3 grid-flow-col gap-4'>
			<div className='row-span-3'>
				<LinkForm />
			</div>
			<div className='row-span-2'>
				<LinkForm />
			</div>
			<div className='row-span-2 col-span-2'>
				<LinkForm />
				<LinkForm />
				<LinkForm />
			</div>
		</div>
	);
};

export default MainBody;
