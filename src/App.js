import React from 'react';

//component import
import Nav from './components/Nav';
import Index from './components/Index';
import Country from './components/Country';
import Container from './components/Container';

function App() {
	return (
		<div className="App">
			<Nav />
			<Index />
			<Country />
			<Container />
		</div>
	);
}

export default App;
