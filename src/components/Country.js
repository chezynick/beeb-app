import React from 'react';

const Country = () => {
	const ukarr = [
		{ name: 'England' },
		{ name: 'Scotland' },
		{ name: 'N.Ireland' },
		{ name: 'Cymru' },
		{ name: 'Wales' },
		{ name: 'Local News' },
	];

	return (
		<div className="hidden md:flex divide-x-2 divide-black divide-opacity-20 mt-3 pl-9 text-sm">
			{ukarr.map((item) => (
				<div className="px-5">{item.name}</div>
			))}
		</div>
	);
};

export default Country;
