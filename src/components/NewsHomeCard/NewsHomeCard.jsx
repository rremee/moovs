import './newsHomeCard.scss'

const NewsHomeCard = ({image, title, url, description, placeholderImage}) => {

	const handleError = (e) => {
		if (e.target.src !== placeholderImage) {
			e.target.src = placeholderImage;
		}
	};

	return (
		<a href={url} target="_blank" rel="noopener noreferrer" className={'news-home-card'}>
			<div className={'news-home-card__image'}>
				<img
					src={image ? image : placeholderImage}
					alt={title}
					onError={handleError}
				/>
			</div>
			<span className="news-home-card__content">
				<h4 className={'news-home-card__title'}>
				{title}
				</h4>
				<p className={'news-home-card__description'}>
					{description}
				</p>
			</span>
		</a>
	);
};

export default NewsHomeCard;