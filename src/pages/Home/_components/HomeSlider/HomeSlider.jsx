import {useState, useEffect, useCallback, useRef} from 'react';
import MovieCard from "../MovieCard/MovieCard.jsx";
import ErrorMessage from "@/components/ErrorMessage/ErrorMessage.jsx";
import useTMDBService from "@/services/TMDBService.js";
import './homeSlider.scss';

const AUTO_SLIDE = 10000;
const COUNT_SLIDE = 10;

const HomeSlider = () => {
	const [movies, setMovies] = useState([]);
	const [activeMovieIdx, setActiveMovieIdx] = useState(0);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	const timerRef = useRef(null);
	const total = movies.length;

	const {getMoviesNowPlaying} = useTMDBService();

	const startTimer = useCallback(() => {
		clearInterval(timerRef.current);
		timerRef.current = setInterval(() => {
			setActiveMovieIdx((prev) => (prev + 1) % total);
		}, AUTO_SLIDE);
	},[total]);

	useEffect(() => {
		setLoading(true);
		setError(false);
		getMoviesNowPlaying()
			.then(data => {
				setMovies(data.slice(0, COUNT_SLIDE));
				setLoading(false);
		})
			.catch(err => {
				console.error("Error movie loading:", err);
				setError(true);
				setLoading(false);
			});
	}, [])

	useEffect(() => {
		if (total < 1) return;
		startTimer();
		return () => clearInterval(timerRef.current);
	}, [startTimer, total]);

	const handleSlideChange = (movieIdx) => {
		if (movieIdx === activeMovieIdx) return;
		setActiveMovieIdx(movieIdx);
		startTimer();
	}

	const handleSlidePrev = () => {
		const newIdx = (activeMovieIdx - 1 + total) % total;
		handleSlideChange(newIdx);
	}
	const handleSlideNext = () => {
		const newIdx = (activeMovieIdx + 1) % total;
		handleSlideChange(newIdx);
	}

	const dots = movies.length > 1 ? movies.map((_, i) => (
		<button
			key={i}
			className={`movie-slider__dot ${i === activeMovieIdx ? "movie-slider__dot--active" : ""}`}
			onClick={() => handleSlideChange(i)}
			aria-label={`Go to slide ${i + 1}`}
			style={{ '--slide-duration': `${AUTO_SLIDE}ms` }}
		/>
	)) : null;

	if (error) return <ErrorMessage />;

	return (
		<div className={'movie-slider'}>
			<div className="movie-slider__wrapper">
				{loading
					? Array.from({length: COUNT_SLIDE}, (_,i) => {
						const isActive = i === 0;
						return (
							<div
								key={i}
								className={`movie-slider__card ${isActive ? 'movie-slider__card--active' : 'movie-slider__card--hidden'}`}
							>
								<MovieCard isLoading isActive={isActive}/>
							</div>
						)
					})
					: movies.map((movie, i) => {
						const isActive = i === activeMovieIdx;
						return (
							<div
								key={movie.id ?? i}
								className={`movie-slider__card ${isActive ? 'movie-slider__card--active' : 'movie-slider__card--hidden'}`}
							>
								<MovieCard movie={movie} isActive={isActive} />
							</div>
						)
					})}
			</div>
			{ dots && (
				<div className={'movie-slider__navigation'}>
					<button
						className={'movie-slider__btn movie-slider__btn--prev'}
						onClick={handleSlidePrev}
						aria-label={'Previous slide'}
					>
						<span className={'icon-arrow'}></span>
					</button>
					<div className="movie-slider__dots" role="tablist">
						{dots}
					</div>
					<button
						className={'movie-slider__btn movie-slider__btn--next'}
						onClick={handleSlideNext}
						aria-label={'Next slide'}
					>
						<span className={'icon-arrow'}></span>
					</button>
				</div>
			)}
		</div>
	);
};

export default HomeSlider;