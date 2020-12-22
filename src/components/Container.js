import React from 'react';

import Main from './Main';
import SideBar from './SideBar';

const Container = () => {
	return (
		<div className="flex md:mx-9">
			<Main />

			<SideBar />
		</div>
	);
};

export default Container;
