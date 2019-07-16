import React, { Component } from "react";
import "./App.css";
import ClickImage from "./components/ClickImage";
import characters from "./characters.json";

class App extends Component {

	// App state
	state = {
		currScore: 0,
		highScore: 0
	}

	/**
	 * Updates the currScore depending on the id
	 * @param {int} id character id
	 */
	updateScore(id) {
		alert(`You chose ${id}`);
	};

	render() {
		return (
			<div className="container App">
				<div className="row">
					{characters.map(character =>
						<ClickImage
							key={character.id}
							id={character.id}
							name={character.name}
							image={character.image}
							updateScore={this.updateScore}
						/>
					)}
				</div>
			</div>
		);
	}
}

export default App;
