import React from 'react';

const Index = () => {
	const menu = [
		{ name: 'Home' },
		{ name: 'Brexit' },
		{ name: 'Coronavirus' },
		{ name: 'UK' },
		{ name: 'World' },
		{ name: 'Business' },
		{ name: 'Politics' },
		{ name: 'Tech' },
		{ name: 'Science' },
		{ name: 'Health' },
		{ name: 'Family' },
		{ name: 'Education' },
		{ name: 'Stories' },
		{ name: 'Pictures' },
		{ name: 'More' },
	];
	return (
		<div className="bg-red-700 text-white md:pl-10 md:pr-20 md:pb-3">
			<h1 className="text-5xl py-5 pl-4">NEWS</h1>
			<div className=" hidden md:flex justify-between items-center divide-x-2 divide-white text-center pl-0 pr-20 divide-opacity-10">
				{menu.map((item) => (
					<div className="px-4 text-sm">{item.name}</div>
				))}
			</div>
			<div className="flex  w-full md:hidden">
				<div className="w-1/2 flex justify-center align-center py-3">Latest Stories</div>
				<div className="w-1/2 flex justify-center align-center bg-red-900 py-3">Most Read</div>
			</div>
		</div>
	);
};

export default Index;
