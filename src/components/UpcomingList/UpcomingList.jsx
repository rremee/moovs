import {useEffect, useState} from "react";
import UpcomingCard from "../UpcomingCard/UpcomingCard.jsx";
import useTMDBService from "../../services/TMDBService.js";
import './upcomingList.scss'

const UpcomingList = () => {

	const [upcomingMovies, setUpcomingMovies] = useState([]);

	const {getMoviesUpcoming} = useTMDBService();

	useEffect(() => {
		getMoviesUpcoming()
			.then(data => {
				setUpcomingMovies(data.slice(0, 5));
			})
			.catch(error => console.log('Error upcoming movies loading: ', error));
	}, [])

	return (
		<div className={'upcoming-list'}>
			{upcomingMovies.map(card => (
				<UpcomingCard
					key={card.id}
					imageSrc={card.imageSrc}
					title={card.title}
					date={card.date}
				/>
			))}
		</div>
	);
};

export default UpcomingList;