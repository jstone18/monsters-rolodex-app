import React from "react";
import "./search.css";

const Search = ({ handleSearchChange }) => {
	return (
		<div>
			<input
				className="search-box"
				type="text"
				placeholder="search monsters"
				onChange={handleSearchChange}
			/>
		</div>
	);
};

export default Search;
