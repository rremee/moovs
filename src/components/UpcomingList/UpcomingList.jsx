import {upcomingCards} from '../../constants/script.js';
import UpcomingCard from "../UpcomingCard/UpcomingCard.jsx";
import './upcomingList.scss'

const UpcomingList = () => {
	return (
		<div className={'upcoming-list'}>
			{upcomingCards.map(card => (
				<UpcomingCard
					key={card.id}
					imageUrl={card.imageUrl}
					name={card.name}
					date={card.date}
				/>
			))}
		</div>
	);
};

export default UpcomingList;