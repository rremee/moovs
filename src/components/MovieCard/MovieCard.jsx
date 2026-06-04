import MovieDetail from "../MovieDetail/MovieDetail.jsx";
import Skeleton from 'react-loading-skeleton';
import ActorHomeSlider from "../ActorHomeSlider/ActorHomeSlider.jsx";
import './movieCard.scss';

const truncText = (text, maxLength) => {
	if (!text) return '';
	if (text.length <= maxLength) return text;
	const lastSpace = text.lastIndexOf(" ", maxLength);
	return text.slice(0, lastSpace > 0 ? lastSpace : maxLength) + '...';
}

const MovieCard = ({movie, isActive, isLoading}) => {

	const { title, overview, image, actors = [], detailsList = [] } = movie || {};

	return (
		<div className={`movie-card ${isActive ? 'movie-card--active' : ''} ${isLoading ? 'disabled' : ''}`}>

			{
				isLoading
					? (
						<div className="movie-card__img">
							<Skeleton height="100%" />
						</div>
					)
					: <img src={image} alt={title} className="movie-card__img"/>
			}

			<div className="movie-card__details">
				{
					isLoading
					? Array.from({ length: 3 }, (_, i) => <Skeleton key={i} width={60} height={24}/>)
					: detailsList.map(item => (
							<MovieDetail
								key={item.id}
								name={item.name}
							/>
						))
				}
			</div>

			<div className="movie-card__actors">
				{
					isLoading
					? Array.from({ length: 3 }, (_, i) => (
						<div key={i} className="movie-card__actors--skeleton">
							<Skeleton width={82} height={20} />
							<Skeleton width={42} height={60} />
						</div>
					))
					: actors.map(actor => (
							<ActorHomeSlider
								key={actor.id}
								name={actor.name}
								imageSrc={actor.imageSrc}
							/>
						))
				}
			</div>

			<div className="movie-card__content">
				<h3 className="movie-card__title">
					{isLoading ? <Skeleton width='60%'/> : title}
				</h3>
				<p className="movie-card__descr">
					{isLoading ? <Skeleton count={3} width='90%'/> : truncText(overview, 160)}
				</p>
				<div className="movie-card__actions">
					<ul>
						{
							isLoading
							? Array.from({ length: 3 }, (_, i) => <li key={i}><Skeleton circle width={24} height={24}/></li>)
							: (
								<>
									<li><a href=""><span className={'icon-play'}></span></a></li>
									<li><a href=""><span className={'icon-star'}></span></a></li>
									<li><a href=""><span className={'icon-favorite'}></span></a></li>
								</>
							)
						}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default MovieCard;