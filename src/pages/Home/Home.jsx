import Heading from "@/components/Heading/Heading.jsx";
import UpcomingList from "./_components/UpcomingList/UpcomingList.jsx";
import NewsHome from "./_components/NewsHome/NewsHome.jsx";
import HomeSlider from "./_components/HomeSlider/HomeSlider.jsx";
import './home.scss';

const Home = () => {
	return (
		<div className={'home-content'}>
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
		</div>
	);
};

export default Home;