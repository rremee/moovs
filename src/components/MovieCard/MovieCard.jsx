import {movieDetails, actorsSlider} from "../../constants/script.js";
import MovieDetail from "../MovieDetail/MovieDetail.jsx";
import ActorHomeSlider from "../ActorHomeSlider/ActorHomeSlider.jsx";
import './movieCard.scss';

const truncText = (text, maxLength) => {
	if (!text) return '';
	if (text.length <= maxLength) return text;
	const lastSpace = text.lastIndexOf(" ", maxLength);
	return text.slice(0, lastSpace > 0 ? lastSpace : maxLength) + '...';
}

const MovieCard = ({movie, isActive}) => {
	const {name, descr} = movie;
	return (
		<div className={`movie-card ${isActive ? 'movie-card--active' : ''}`}>
			<img src="https://www.arthipo.com/image/cache/catalog/poster/movie/1555-2059/pfilm1635-fury-movie-poster-986x1100.webp" alt="Poster" className="movie-card__img"/>
			<div className="movie-card__details">
				{movieDetails.map(movie => (
					<MovieDetail
						key={movie.id}
						name={movie.name}
					/>
				))}
			</div>
			<div className="movie-card__actors">
				{actorsSlider.map(actor => (
					<ActorHomeSlider
						key={actor.id}
						name={actor.name}
						imageSrc={actor.imageSrc}
					/>
				))}
			</div>
			<div className="movie-card__content">
				<h3 className="movie-card__title">
					{name}
				</h3>
				<p className="movie-card__descr">
					{truncText(descr, 160)}
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