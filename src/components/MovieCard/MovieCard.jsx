import {movieDetails, actorsSlider} from "../../constants/script.js";
import MovieDetail from "../MovieDetail/MovieDetail.jsx";
import ActorHomeSlider from "../ActorHomeSlider/ActorHomeSlider.jsx";
import './movieCard.scss';

const MovieCard = () => {
	return (
		<div className={'movie-card'}>
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
					Movie Name
				</h3>
				<p className="movie-card__descr">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus facere harum necessitatibus nihil similique voluptatibus! Dolorem.
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