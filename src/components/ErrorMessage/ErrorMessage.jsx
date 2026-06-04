import './errorMessage.scss'

const ErrorMessage = ({text = 'Something went wrong'}) => {
	return (
		<div className='error-message'>
			{text}
		</div>
	);
};

export default ErrorMessage;