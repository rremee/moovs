import React from 'react';
import Heading from "../../components/Heading/Heading.jsx";
import UpcomingList from "../../components/UpcomingList/UpcomingList.jsx";
import NewsHome from "../../components/NewsHome/NewsHome.jsx";
import HomeSlider from "../../components/HomeSlider/HomeSlider.jsx";

const Home = () => {
	return (
		<>
			<section className={'home-slider'}>
				<Heading name={'Now Playing'} />
				<HomeSlider/>
			</section>
			<div className="news-wrapper">
				<aside className={'news'}>
					<Heading name={'News'} />
					<NewsHome/>
				</aside>
			</div>
			<section className={'upcoming'}>
				<Heading name={'Upcoming releases'} />
				<UpcomingList/>
			</section>
		</>
	);
};

export default Home;