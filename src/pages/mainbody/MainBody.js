import React from 'react';
const LinkForm = React.lazy(() => import('../../components/linkform/LinkForm'));
const Metrics = React.lazy(() => import('../../components/metrics/Metrics'));
const Footer = React.lazy(() => import('../../components/footer/Footer'));
const Example = React.lazy(() => import('../../components/piechart/PieChart'));
const MainBody = () => {
	return (
		<div className='flex  justify-center'>
			<div className='grid grid-cols-1 max-w-5xl md:grid-cols-4 gap-2 '>
				<div className='row-span-1  col-span-1 md:col-span-2 '>
					<LinkForm className='' />
				</div>
				<div className='col-span-1 md:row-span-2 md:col-span-2 flex justify-center items-center '>
					<Metrics />
				</div>
				<div className='row-span-1 col-span-1 md:col-span-2'>
					<Example />
				</div>
				<div className='row-span-1 col-span-1 md:col-span-4 '>
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default React.memo(MainBody);
