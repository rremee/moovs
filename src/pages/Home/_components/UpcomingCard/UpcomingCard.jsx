import Skeleton from 'react-loading-skeleton';
import './upcomingCard.scss'

const UpcomingCard = ({isLoading, title, imageSrc, date}) => {
	return (
		<a href='/' className={`upcoming-card ${isLoading ? 'disabled' : ''}`}>
			<div className={'upcoming-card__image'}>
				{isLoading ? <Skeleton height='100%'/> : <img src={imageSrc} alt={title} />}
			</div>
			<h4 className="upcoming-card__title">
				{isLoading ? <Skeleton width='80%'/> : title}
			</h4>
			<div className="upcoming-card__date">
				{isLoading ? <Skeleton width='100px' height='20px'/> : <><span className="icon-coming"></span> {date}</>}
			</div>
		</a>
	);
};

export default UpcomingCard;