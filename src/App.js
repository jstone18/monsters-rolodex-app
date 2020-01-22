import React, { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/CardList";

class App extends Component {
	constructor() {
		super();
		this.state = {
			monsters: []
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(res => res.json())
			.then(users => this.setState({ monsters: users }));
	}

	render() {
		const monsters = this.state.monsters.map(monster => (
			<h1 key={monster.id}>{monster.name}</h1>
		));
		return (
			<div className="App">
				<CardList>{monsters}</CardList>
			</div>
		);
	}
}

export default App;
