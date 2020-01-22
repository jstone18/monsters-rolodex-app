import React from "react";
import "./search.css";

const Search = ({ onInputChange }) => {
	return (
		<div>
			<input
				className="search-box"
				type="text"
				placeholder="search monsters"
				onChange={onInputChange}
			/>
		</div>
	);
};

export default Search;
