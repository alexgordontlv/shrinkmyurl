import React from 'react';
import { LockClosedIcon } from '@heroicons/react/solid';
import LinkForm from '../../components/linkform/LinkForm';
import Metrics from '../../components/metrics/Metrics';
import Footer from '../../components/footer/Footer';
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
					<Metrics />
				</div>
				<div className='row-span-3 col-span-4'>
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default MainBody;
