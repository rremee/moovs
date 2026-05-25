export const _placeholderImage = 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=600&auto=format&fit=crop';

const useNewsService = () => {

	const _apiBase = 'https://gnews.io/api/v4/';
	const _apiKey = 'de9dab157c2fc9371d522507677e9811';

	const request = async(url) => {
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error(`News API error: ${response.statusText}`)
		}

		return await response.json();
	}

	const getMovieNews = async () => {
		const res = await request(`${_apiBase}search?q=movie&lang=en&max=8&apikey=${_apiKey}`);
		return res.articles.map(_transformNews);
	}

	const _transformNews = (article) => {
		return {
			id: article.url,
			title: article.title,
			url: article.url,
			description: article.description,
			image: article.image ? article.image : _placeholderImage
		}
	}

	return {
		getMovieNews
	}

};

export default useNewsService;