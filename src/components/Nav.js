import React from 'react';

const Nav = () => {
	return (
		<div className="flex mx-14 mt-2 justify-between items-center divide-gray-300 divide-x-2 pb-3">
			<div className="flex pr-2 ">
				<div className="bg-black text-white h-6 w-6 justify-center items-center flex text-xl font-bold mx-0.5">
					B
				</div>
				<div className="bg-black text-white h-6 w-6 justify-center items-center flex  text-xl font-bold mx-0.5">
					B
				</div>
				<div className="bg-black text-white h-6 w-6 justify-center items-center flex  text-xl font-bold mx-0.5">
					C
				</div>
			</div>
			<div className="hidden xl:flex px-10 items-center justify-evenly">
				<div className="rounded-full h-5 w-5 bg-white border-black border-2"></div>
				<div className=" pl-5 pr-15">nick</div>
			</div>
			<nav className="hidden md:flex justify-evenly divide-gray-300 divide-x-2 items-center font-bold text-sm">
				<h6 className="px-5">Home</h6>
				<h6 className="px-5">News</h6>
				<h6 className="px-5">Sport</h6>
				<h6 className="px-5">Weather</h6>
				<h6 className="px-5 hidden lg:flex">iPlayer</h6>
				<h6 className="px-5 hidden lg:flex">Sounds</h6>
				<h6 className="px-5 hidden lg:flex">CBBC</h6>
				<h6 className="px-5">More</h6>
			</nav>
			<div className="hidden xl:flex items-center pl-16 border-l-2 border-gray-300 text-black">
				<textarea
					name=""
					id=""
					cols="20"
					rows="1"
					className="bg-gray-200 resize-none text-black pl-3"
					placeholder="Search"
				></textarea>
			</div>
		</div>
	);
};

export default Nav;
