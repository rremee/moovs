import "./searchForm.scss"

const SearchForm = () => {
	return (
		<form action="#" className={'search-form'}>
			<input
				type="search"
				className={'search-form__input'}
				placeholder="Search"
				aria-label={'Searching'}
			/>
			<button type="submit" className={'search-form__button'} >
				<span className={'icon-search'}></span>
			</button>
		</form>
	);
};

export default SearchForm;