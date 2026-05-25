import {useEffect, useState} from "react";
import useNewsService, {_placeholderImage} from "../../services/NewsService.js";
import NewsHomeCard from "../NewsHomeCard/NewsHomeCard.jsx";
import './newsHome.scss'

const NewsHome = () => {

	const [news, setNews] = useState([]);

	const {getMovieNews} = useNewsService();

	useEffect(() => {
		getMovieNews()
			.then(data => setNews(data))
			.catch(err => console.error("News loading:", err));
	}, [])

	return (
		<div className={'news-home'}>
			<div className="news-home__track">
				{[0, 1].map(listIndex => (
					<div
						className="news-home__list"
						key={listIndex}
						aria-hidden={listIndex === 1}
					>
						{news.map(article => (
							<NewsHomeCard
								key={`${listIndex}-${article.id}`}
								title={article.title}
								description={article.description}
								image={article.image}
								url={article.url}
								placeholderImage={_placeholderImage}
							/>
						))}
					</div>
				))}
			</div>
		</div>
	);
};

export default NewsHome;