import React from "react";
import "./card.css";

const Card = ({ monster }) => {
	return (
		<div className="card-container">
			<h1>{monster.name}</h1>
		</div>
	);
};

export default Card;
