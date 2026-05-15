import "./actorHomeSlider.scss"

const ActorHomeSlider = ({name, imageSrc}) => {
	return (
		<a href='/' className="actor-home-slider">
			<div className="actor-home-slider__name">
				{name}
			</div>
			<div className="actor-home-slider__image">
				<img src={imageSrc} alt="Actor Profile"  />
			</div>
		</a>
	);
};

export default ActorHomeSlider;