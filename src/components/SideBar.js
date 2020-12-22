import React from 'react';

const SideBar = () => {
	const newsArr = [
		{ name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quisquam.' },
		{ name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quisquam.' },
		{ name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quisquam.' },
		{ name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quisquam.' },
		{ name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quisquam.' },
		{ name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quisquam.' },
	];

	return (
		<div className="hidden xl:flex flex-col xl:w-1/5 ">
			{newsArr.map((item) => (
				<div className="border-b-2 border-gray-400 py-3">
					<h3 className="font-bold">{item.name}</h3>
					<div className="flex divide-x-2 divide-gray-400 pt-3 pb-1">
						<p className="pr-5 text-gray-400 text-sm">22hrs</p>
						<p className="pl-5 text-gray-400 text-sm">Health</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default SideBar;
