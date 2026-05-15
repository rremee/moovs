import './upcomingCard.scss'

const UpcomingCard = ({name, imageUrl, date}) => {
	return (
		<a href='/' className={'upcoming-card'}>
			<div className={'upcoming-card__image'}>
				<img src={imageUrl} alt="Upcoming Poster" />
			</div>
			<h4 className="upcoming-card__title">
				{name}
			</h4>
			<div className="upcoming-card__date">
				<span className={'icon-coming'}></span> {date}
			</div>
		</a>
	);
};

export default UpcomingCard;