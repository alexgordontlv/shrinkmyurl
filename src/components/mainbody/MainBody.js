import React from 'react';
import { LockClosedIcon } from '@heroicons/react/solid';

const MainBody = () => {
	return (
		<div className='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
			<div className='max-w-md w-full space-y-8'>
				<div>
					<img className='mx-auto h-12 w-auto' src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg' alt='Workflow' />
					<h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>Sign in to your account</h2>
					<p className='mt-2 text-center text-sm text-gray-600'>
						Or{' '}
						<a href='#' className='font-medium text-indigo-600 hover:text-indigo-500'>
							start your 14-day free trial
						</a>
					</p>
				</div>
				<form className='mt-8 space-y-6' action='#' method='POST'>
					<input type='hidden' name='remember' defaultValue='true' />
					<div className='rounded-md shadow-sm -space-y-px'>
						<div>
							<label htmlFor='email-address' className='sr-only'>
								Email address
							</label>
							<div className='mt-1 relative rounded-md shadow-sm'>
								<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
									<span className='text-gray-500 sm:text-sm'>
										<svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1'
											/>
										</svg>
									</span>
								</div>
								<input
									readonly
									value='hahaha'
									type='text'
									name='price'
									id='price'
									className='p-3 ml-3 focus:outline-none focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md'
									placeholder='0.00'
								/>
							</div>
						</div>
					</div>

					<div className='flex items-center justify-between'>
						<div className='flex items-center'>
							<input
								id='remember_me'
								name='remember_me'
								type='checkbox'
								className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
							/>
							<label htmlFor='remember_me' className='ml-2 block text-sm text-gray-900'>
								Remember me
							</label>
						</div>

						<div className='text-sm'>
							<a href='#' className='font-medium text-indigo-600 hover:text-indigo-500'>
								Forgot your password?
							</a>
						</div>
					</div>

					<div>
						<button
							type='submit'
							className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 '>
							<span className='absolute left-0 inset-y-0 flex items-center pl-3'>
								<LockClosedIcon className='h-5 w-5 text-white group-hover:text-white' aria-hidden='true' />
							</span>
							Sign in this is nice font!
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default MainBody;
