import Skeleton from 'react-loading-skeleton';
import {truncText} from "@/constants/script.js";
import './newsHomeCard.scss'

const NewsHomeCard = ({image, title, url, description, placeholderImage, isLoading}) => {

	const handleError = (e) => {
		if (e.target.src !== placeholderImage) {
			e.target.src = placeholderImage;
		}
	};

	return (
		<a href={url} target="_blank" rel="noopener noreferrer" className={'news-home-card'}>
			<div className={'news-home-card__image'}>
				{
					isLoading
					? <Skeleton height='100%' />
					:
						<>
							<img
								src={image ? image : placeholderImage}
								alt={title}
								onError={handleError}
							/>
						</>
				}
			</div>
			<span className="news-home-card__content">
				<h4 className={'news-home-card__title'}>
				{isLoading ? <Skeleton width={'84%'} /> : title}
				</h4>
				<p className={'news-home-card__description'}>
					{isLoading ? <Skeleton count={3} width={'92%'} /> : truncText(description, 220)}
				</p>
			</span>
		</a>
	);
};

export default NewsHomeCard;