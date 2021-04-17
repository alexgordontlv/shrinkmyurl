import React from 'react';
import { LockClosedIcon } from '@heroicons/react/solid';
import LinkForm from '../../components/linkform/LinkForm';
const MainBody = () => {
	return (
		<div className='min-h-screen flex-col items-center justify-center bg-indigo-100 py-12 px-4 sm:px-6 lg:px-8'>
			<div></div>
			<div className='flex justify-center text-center'>
				<LinkForm />
			</div>
		</div>
	);
};

export default MainBody;
