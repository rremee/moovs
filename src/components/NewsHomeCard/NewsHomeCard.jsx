import './newsHomeCard.scss'

const NewsHomeCard = ({image, title}) => {
	return (
		<a href='/' className={'news-home-card'}>
			<div className={'news-home-card__image'}>
				<img src={image} alt="News Image"/>
			</div>
			<h4 className={'news-home-card__title'}>
				{title}
			</h4>
		</a>
	);
};

export default NewsHomeCard;