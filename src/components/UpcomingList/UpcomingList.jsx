import {useEffect, useState} from "react";
import UpcomingCard from "../UpcomingCard/UpcomingCard.jsx";
import useTMDBService from "../../services/TMDBService.js";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";
import './upcomingList.scss'

const UPCOMING_COUNT = 5;

const UpcomingList = () => {

	const [upcomingMovies, setUpcomingMovies] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	const {getMoviesUpcoming} = useTMDBService();

	useEffect(() => {
		setLoading(true);
		setError(false);
		getMoviesUpcoming()
			.then(data => {
				setUpcomingMovies(data.slice(0, UPCOMING_COUNT));
				setLoading(false);
			})
			.catch(error => {
				console.log('Error upcoming movies loading: ', error);
				setError(true);
				setLoading(false);
			});
	}, [])

	if (error) return <ErrorMessage/>;

	return (
		<div className={'upcoming-list'}>
			{loading
				? Array.from({ length: UPCOMING_COUNT }, (_, i) => (
					<UpcomingCard key={i} isLoading />
				))
				: upcomingMovies.map(card => (
					<UpcomingCard
						key={card.id}
						imageSrc={card.imageSrc}
						title={card.title}
						date={card.date}
					/>
				))
			}
		</div>
	);
};

export default UpcomingList;