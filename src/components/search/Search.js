import React from "react";

const Search = ({ onInputChange }) => {
	return (
		<div>
			<input
				type="text"
				placeholder="search monsters"
				onChange={onInputChange}
			/>
		</div>
	);
};

export default Search;
