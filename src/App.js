import React, { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/CardList";
import Search from "./components/search/Search";

class App extends Component {
	constructor() {
		super();
		this.state = {
			monsters: [],
			searchField: ""
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(res => res.json())
			.then(users => this.setState({ monsters: users }));
	}

	handleSearchChange = event => {
		this.setState({
			searchField: event.target.value
		});
	};

	render() {
		const { monsters, searchField } = this.state;
		const filteredMonsters = monsters.filter(monster =>
			monster.name.toLowerCase().includes(searchField.toLowerCase())
		);
		return (
			<div className="App">
				<Search handleSearchChange={this.handleSearchChange} />
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;
