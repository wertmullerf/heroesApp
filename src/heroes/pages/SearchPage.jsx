import React from "react";
import { useForm } from "../../hooks/useForm";
import queryString from "query-string";
import { HeroCard } from "../components/HeroCard";
import { useNavigate, useLocation } from "react-router-dom";
import { getHeroesByName } from "../helpers/getHeroesByName";
const SearchPage = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { q = "" } = queryString.parse(location.search);
	const heroes = getHeroesByName(q);
	const { searchText, onInputChange } = useForm({
		searchText: q,
	});
	const handleSearchSubmit = (e) => {
		e.preventDefault();
		if (searchText.trim().length <= 1) {
			return;
		}
		navigate(`?q=${searchText.toLowerCase().trim()}`);

		console.log({ searchText });
	};

	return (
		<>
			<h1>Search</h1>
			<hr />
			<div className="row">
				<div className="col-5">
					<h4>Searching</h4>
					<hr />
					<form onSubmit={handleSearchSubmit}>
						<input
							type="text"
							placeholder="Search hero"
							className="form-control"
							name="searchText"
							autoComplete="off"
							value={searchText}
							onChange={onInputChange}
						/>
					</form>
					<button
						className="btn btn-outline-primary mt-2"
						onClick={handleSearchSubmit}
					>
						Search
					</button>
				</div>

				<div className="col-7">
					<h4>Results</h4>
					<hr />
					{q === "" ? (
						<div className="alert alert-info">Search a hero</div>
					) : (
						heroes.length === 0 && (
							<div className="alert alert-danger">
								There is <b>{q}</b>
							</div>
						)
					)}

					{heroes.map((hero) => {
						return <HeroCard key={hero.id} hero={hero} />;
					})}
					{/* <HeroCard /> */}
				</div>
			</div>
		</>
	);
};

export default SearchPage;
