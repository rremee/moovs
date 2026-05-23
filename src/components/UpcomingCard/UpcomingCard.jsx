import './upcomingCard.scss'

const UpcomingCard = ({title, imageSrc, date}) => {
	return (
		<a href='/' className={'upcoming-card'}>
			<div className={'upcoming-card__image'}>
				<img src={imageSrc} alt={title} />
			</div>
			<h4 className="upcoming-card__title">
				{title}
			</h4>
			<div className="upcoming-card__date">
				<span className={'icon-coming'}></span> {date}
			</div>
		</a>
	);
};

export default UpcomingCard;