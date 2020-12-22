import React from 'react';

const Main = () => {
	const newsArr = [
		{
			image:
				'https://images.pexels.com/photos/4427814/pexels-photo-4427814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
			headline: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, ipsam.',
			detail:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto eaque non sint quod iure. Doloremque ullam quo error maxime voluptatem, non quos eligendi sit reprehenderit!',
		},
		{
			image:
				'https://images.pexels.com/photos/4427814/pexels-photo-4427814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
			headline: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, ipsam.',
			detail:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto eaque non sint quod iure. Doloremque ullam quo error maxime voluptatem, non quos eligendi sit reprehenderit!',
		},
		{
			image:
				'https://images.pexels.com/photos/4427814/pexels-photo-4427814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
			headline: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, ipsam.',
			detail:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto eaque non sint quod iure. Doloremque ullam quo error maxime voluptatem, non quos eligendi sit reprehenderit!',
		},
		{
			image:
				'https://images.pexels.com/photos/4427814/pexels-photo-4427814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
			headline: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, ipsam.',
			detail:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto eaque non sint quod iure. Doloremque ullam quo error maxime voluptatem, non quos eligendi sit reprehenderit!',
		},
		{
			image:
				'https://images.pexels.com/photos/4427814/pexels-photo-4427814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
			headline: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, ipsam.',
			detail:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto eaque non sint quod iure. Doloremque ullam quo error maxime voluptatem, non quos eligendi sit reprehenderit!',
		},
	];
	return (
		<div className="w-full xl:w-4/5 grid md:grid-cols-3 lg:grid-cols-4 gap-5 px-5 h-auto">
			<div className="col-span-2 md:col-span-1">
				<h1 className="font-bold text-3xl py-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
				<p className="text-gray-500 text-sm pb-5">
					{' '}
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis sed magnam atque, assumenda
					perspiciatis dolorem est omnis expedita dolor officia?
				</p>
				<ul className="list-disc ml-5 pb-5">
					<li>Lorem ipsum dolor sit amet.</li>
					<li>Lorem ipsum dolor, sit amet consectetur adipisicing.</li>
					<li>Lorem ipsum dolor sit.</li>
				</ul>
			</div>
			<img
				className="row-start-1 md:col-start-2 col-span-2 py-3"
				src="https://images.pexels.com/photos/5273664/pexels-photo-5273664.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
				alt=""
			/>
			{newsArr.map((item) => (
				<div>
					<img className="py-3" src={item.image} alt={item.headline} />
					<h2 className="font-bold ">{item.headline}</h2>
					<p className="text-sm text-gray-600">{item.detail}</p>
				</div>
			))}
		</div>
	);
};

export default Main;
