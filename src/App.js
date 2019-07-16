import React, { Component } from "react";
import "./App.css";
import ClickImage from "./components/ClickImage";
import characters from "./characters.json";

class App extends Component {

	// App state
	state = {
		currScore: 0,
		highScore: 0,
		charactersRemaining: characters
	}

	/**
	 * Updates the currScore depending on the id
	 * @param {int} id character id
	 */
	updateScore = id => {
		// alert(`You chose ${id}`);


		// If id has been chosen already
		if (this.checkIfChosen(id)) {
			// Reset game
			alert("Game resetting...");
			this.setState({
				currScore: 0,
				charactersRemaining: characters
			});
		} else {
			// Increase currScore and increase highScore if currScore > highScore
			let currScore = this.state.currScore + 1;
			let highScore = this.state.highScore;

			if (currScore > highScore) {
				highScore = currScore;
			}

			this.setState({
				currScore: currScore,
				highScore: highScore
			});

			console.log(`Current score:	${currScore}`);
			console.log(`High score:	${highScore}`);
		}


	};

	/**
	 * Checks to see if the id has already been chosen
	 * @param {int} id character id
	 */
	checkIfChosen = id => {
		// Filter out chosen id
		let charactersRemaining = this.state.charactersRemaining.filter(character => character.id !== id);

		// console.log(`charactersRemaining.length: 		   ${charactersRemaining.length}`);
		// console.log(`this.state.charactersRemaining.length: ${this.state.charactersRemaining.length}`);

		if (charactersRemaining.length === this.state.charactersRemaining.length) {
			// Characters has already been chosen
			return true;
		} else {
			// Update state of charactersRemaining
			this.setState({ charactersRemaining: charactersRemaining });

			// Return false if id has not been chosen
			return false;
		}
	}

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
