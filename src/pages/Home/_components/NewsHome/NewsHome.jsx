import {useEffect, useState, useRef} from "react";
import useNewsService, {_placeholderImage} from "@/services/NewsService.js";
import NewsHomeCard from "../NewsHomeCard/NewsHomeCard.jsx";
import './newsHome.scss'
import ErrorMessage from "@/components/ErrorMessage/ErrorMessage.jsx";

const NewsHome = () => {

	const [news, setNews] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [marquee, setMarquee] = useState(false);

	const {getMovieNews} = useNewsService();

	const isFetched = useRef(false);

	useEffect(() => {
		if (isFetched.current) return;
		isFetched.current = true;
		setLoading(true);
		setError(false);
		setMarquee(false);
		getMovieNews()
			.then(data => {
				setNews(data);
				setLoading(false);
				setTimeout(() => setMarquee(true), 1000);
			})
			.catch(err => {
				console.error("News loading:", err);
				setError(true);
				setLoading(false);
			});
	}, [])

	if (error) return <ErrorMessage/>;

	return (
		<div className={'news-home'}>
			<div className={`news-home__track ${marquee ? 'news-home__track--animated' : ''}`}>
				{[0, 1].map(listIndex => (
					<div
						className="news-home__list"
						key={listIndex}
						aria-hidden={listIndex === 1}
					>
						{loading
						? Array.from({length: 8}, (_, i) => (
							<NewsHomeCard key={i} isLoading/>
							))
						:
							news.map(article => (
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