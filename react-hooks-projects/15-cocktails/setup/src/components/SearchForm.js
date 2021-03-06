import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
	const { setSearchTerm } = useGlobalContext();
	const searchValue = React.useRef("");
	const searchCocktail = () => {
		console.log(searchValue.current.value);
		setSearchTerm(searchValue.current.value);
	};

	React.useEffect(() => {
		searchValue.current.focus();
	}, []);

	return (
		<section className="section search">
			<form className="search-form" onSubmit={(e) => e.preventDefault()}>
				<div className="form-control">
					<label htmlFor="name">search your favourite cocktail</label>
					<input
						type="text"
						id="name"
						ref={searchValue}
						onChange={searchCocktail}
					/>
				</div>
			</form>
		</section>
	);
};

export default SearchForm;
