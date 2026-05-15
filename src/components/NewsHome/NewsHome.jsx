import {newsHome} from "../../constants/script.js";
import NewsHomeCard from "../NewsHomeCard/NewsHomeCard.jsx";
import './newsHome.scss'

const NewsHome = () => {
	return (
		<div className={'news-home'}>
			<div className="news-home__list">
				{newsHome.map(news => (
					<NewsHomeCard
						key={news.id}
						title={news.title}
						image={news.imageUrl}
					/>
				))}
			</div>
		</div>
	);
};

export default NewsHome;