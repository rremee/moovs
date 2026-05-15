import './heading.scss'

const Heading = ({name}) => {
	return (
		<h2 className={`heading`}>
			{name}
		</h2>
	);
};

export default Heading;