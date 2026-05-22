import {useEffect, useState} from "react";
import MovieDetail from "../MovieDetail/MovieDetail.jsx";
import ActorHomeSlider from "../ActorHomeSlider/ActorHomeSlider.jsx";
import useTMDBService from "../../services/TMDBService.js";
import './movieCard.scss';

const truncText = (text, maxLength) => {
	if (!text) return '';
	if (text.length <= maxLength) return text;
	const lastSpace = text.lastIndexOf(" ", maxLength);
	return text.slice(0, lastSpace > 0 ? lastSpace : maxLength) + '...';
}

const MovieCard = ({movie, isActive}) => {

	const [actors, setActors] = useState([]);
	const [details, setDetails] = useState([]);
	if (!movie) return null;
	const {id, title, overview, image} = movie;
	const {getMoviesPlayingDetails} = useTMDBService();

	useEffect(() => {
		if (id) {
			getMoviesPlayingDetails(id)
				.then(data => {
					setActors(data.actors);
					setDetails(data.detailsList);
				})
				.catch(err => console.error("Error movie details loading:", err));
		}
	}, [id])

	return (
		<div className={`movie-card ${isActive ? 'movie-card--active' : ''}`}>
			<img src={image} alt={title} className="movie-card__img"/>
			<div className="movie-card__details">
				{details.map(movie => (
					<MovieDetail
						key={movie.id}
						name={movie.name}
					/>
				))}
			</div>
			<div className="movie-card__actors">
				{actors.map(actor => (
					<ActorHomeSlider
						key={actor.id}
						name={actor.name}
						imageSrc={actor.imageSrc}
					/>
				))}
			</div>
			<div className="movie-card__content">
				<h3 className="movie-card__title">
					{title}
				</h3>
				<p className="movie-card__descr">
					{truncText(overview, 160)}
				</p>
				<div className="movie-card__actions">
					<ul>
						<li>
							<a href="">
								<span className={'icon-play'}></span>
							</a>
						</li>
						<li>
							<a href="">
								<span className={'icon-star'}></span>
							</a>
						</li>
						<li>
							<a href="">
								<span className={'icon-favorite'}></span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default MovieCard;