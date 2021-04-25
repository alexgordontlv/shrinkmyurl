import React from 'react';
import { LockClosedIcon } from '@heroicons/react/solid';
import LinkForm from '../../components/linkform/LinkForm';
import Metrics from '../../components/metrics/Metrics';
import Footer from '../../components/footer/Footer';
const MainBody = () => {
	return (
		<div className='flex  justify-center'>
			<div className='grid grid-cols-1 max-w-5xl md:grid-cols-4 md:grid-rows-4 gap-2 '>
				<div className='row-span-2  col-span-2 '>
					<LinkForm className='' />
				</div>
				<div className='row-span-4 col-span-2 flex justify-center items-center '>
					<Metrics />
				</div>

				<div className='items-center justify-center row-span-2 col-span-2 '>
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default MainBody;
