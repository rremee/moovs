import "./movieDetail.scss"

const MovieDetail = ({name}) => {
	return (
		<div className={"movie-detail"}>
			{name}
		</div>
	);
};

export default MovieDetail;