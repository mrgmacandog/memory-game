import React, { Component } from "react";
import "./App.css";
import characters from "./characters.json";
import Header from "./components/Header";
import ClickImage from "./components/ClickImage";

class App extends Component {
	// App state
	state = {
		currScore: 0,
		highScore: 0,
		charactersRemaining: characters
	}

	/**
	 * Shuffles the order of an array
	 * @param {Array} array array of any type
	 * @return {Array}		passed in array shuffled
	 */
	shuffleArray = array => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}

	/**
	 * Updates the currScore depending on the id
	 * @param {int} id chosen character id
	 */
	updateScore = id => {
		// If id has been chosen already
		if (this.checkIfChosen(id)) {
			// Reset game
			alert("Game resetting...");
			this.setState({
				currScore: 0,
				charactersRemaining: characters
			});
		} else {
			// Get currScore and increase by 1
			let currScore = this.state.currScore + 1;
			let highScore = this.state.highScore;

			// Increase highScore if currScore > highScore
			if (currScore > highScore) {
				highScore = currScore;
			}

			// Update the state of currScore and highScore
			this.setState({
				currScore: currScore,
				highScore: highScore
			});
		}
	};

	/**
	 * Checks to see if the id has already been chosen
	 * @param {int} id 		chosen character id
	 * @return {boolean}	true if character has already been chosen
	 * 						false if character had not been chosen
	 */
	checkIfChosen = id => {
		// Filter out chosen id
		let charactersRemaining = this.state.charactersRemaining.filter(character => character.id !== id);

		// If the filtered charactersRemaining length is the same as the state's charactersRemaining length
		//     (i.e. nothing was filtered out above)
		if (charactersRemaining.length >= this.state.charactersRemaining.length) {
			// Character has already been chosen
			return true;
		} else {  // A character has been filtered out
			// Update state of charactersRemaining
			this.setState({ charactersRemaining: charactersRemaining });

			// Character has not been chosen before
			return false;
		}
	}

	render() {
		return (
			<React.Fragment >
				<Header 
					currScore={this.state.currScore}
					highScore={this.state.highScore}
				/>
				<div className="container App">
					<div className="row">
						{/* Shuffle all the characters and then return a ClickImage for each of them */}
						{this.shuffleArray(characters).map(character =>
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
			</React.Fragment>
		);
	}
}

export default App;
