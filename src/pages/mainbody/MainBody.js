import React from 'react';
const LinkForm = React.lazy(() => import('../../components/linkform/LinkForm'));
const Metrics = React.lazy(() => import('../../components/metrics/Metrics'));
const Footer = React.lazy(() => import('../../components/footer/Footer'));

const MainBody = () => {
	console.log('mainbody');

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

export default React.memo(MainBody);
