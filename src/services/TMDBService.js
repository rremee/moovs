const useTMDBService = () => {

	const _apiBase = 'https://api.themoviedb.org/3/';
	const _apiKey = '32c377b77f159357d3fc4e9a983f9b65';

	const _imageBase = 'https://image.tmdb.org/t/p/original';
	const _actorImageBase = 'https://image.tmdb.org/t/p/w185';

	const request = async(url) => {
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error(response.statusText)
		}

		return await response.json();
	}

	const getMoviesNowPlaying = async () => {
		const res = await request(`${_apiBase}movie/now_playing?api_key=${_apiKey}`);
		const movies = res.results.map(_transformMovie);

		return await Promise.all(
			movies.map(async (movie) => {
				try {
					const detailsRes = await request(`${_apiBase}movie/${movie.id}?api_key=${_apiKey}&append_to_response=release_dates,credits`);

					const actors = detailsRes.credits?.cast
						.filter(member => member['known_for_department'] === 'Acting')
						.sort((a,b) => b.popularity - a.popularity)
						.slice(0, 3)
						.map(_transformActor);

					const genres = detailsRes.genres?.slice(0,2).map(genre => ({
						id: `genre-${genre.id}-${movie.id}`,
						name: genre.name
					})) || [];

					const runtime = detailsRes.runtime ? {
						id: `runtime-${movie.id}`,
						name: `${Math.floor(detailsRes.runtime / 60) > 0 ? `${Math.floor(detailsRes.runtime / 60)}h ` : ''}${detailsRes.runtime % 60}m`
					} : null;

					let releaseDate = null;
					if (detailsRes.release_date) {
						const date = new Date(detailsRes.release_date).toLocaleDateString('en-US', {
							day: 'numeric',
							month: 'short',
							year: 'numeric'
						});
						releaseDate = { id: `date-${movie.id}`, name: date };
					}

					let ageRating = null;
					const ageRelease = detailsRes.release_dates?.results.find(item => item.iso_3166_1 === 'US');
					const ageCertification = ageRelease?.release_dates?.find(d => d.certification && d.certification !== "")?.certification;
					if (ageCertification) {
						ageRating = { id: `age-${movie.id}`, name: ageCertification };
					}

					const detailsList = [
						runtime,
						...genres,
						ageRating,
						releaseDate
					].filter(Boolean);

					return {
						...movie,
						actors,
						detailsList
					};

				} catch (err) {
					console.log(`Error fetching details for movie ${movie.id}: ${err}`);
					return {...movie, actors: [], detailsList: []};
				}
			})
		)
	}

	const getMoviesUpcoming = async () => {

		const today = new Date();
		const yyyy = today.getFullYear();
		const mm = String(today.getMonth() + 1).padStart(2, '0');
		const dd = String(today.getDate()).padStart(2, '0');
		const formattedToday = `${yyyy}-${mm}-${dd}`;

		const res = await request(
			`${_apiBase}discover/movie?api_key=${_apiKey}&primary_release_date.gte=${formattedToday}&sort_by=popularity.desc&with_runtime.gte=60`
		);

		return res.results.map(_transformUpcomingMovie);
	}

	const _transformMovie = (movie) => {
		return {
			id: movie.id,
			title: movie.title,
			overview: movie.overview,
			image: movie['backdrop_path'] ? `${_imageBase}${movie["backdrop_path"]}` : `${_imageBase}${movie["poster_path"]}`
		}
	}

	const _transformActor = (actor) => {
		return {
			id: actor.id,
			name: actor.name,
			imageSrc: actor['profile_path'] ? `${_actorImageBase}${actor['profile_path']}` : 'https://via.placeholder.com/185x278?text=No+Photo'
		}
	}

	const _transformUpcomingMovie = (movie) => {
		return {
			id: movie.id,
			title: movie.title,
			date: new Date(movie.release_date).toLocaleDateString('en-US', {
				day: 'numeric',
				month: 'short',
				year: 'numeric'
			}),
			imageSrc: movie['backdrop_path'] ? `${_imageBase}${movie["backdrop_path"]}` : `${_imageBase}${movie["poster_path"]}`
		}
	}

	return {
		getMoviesNowPlaying, getMoviesUpcoming
	}
};

export default useTMDBService;