const useTMDBService = () => {

	const _apiBase = 'https://api.themoviedb.org/3/';
	const _apiKey = '32c377b77f159357d3fc4e9a983f9b65';

	const request = async(url) => {
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error(response.statusText)
		}

		return await response.json();
	}

	const getMoviesNowPlaying = () => {
		return request(`${_apiBase}movie/now_playing?api_key=${_apiKey}`)
	}

	return {
		getMoviesNowPlaying
	}
};

export default useTMDBService;