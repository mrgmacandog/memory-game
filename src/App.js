import React, { Component } from "react";
import "./App.css";
import ClickImage from "./components/ClickImage";
import characters from "./characters.json";

class App extends Component {
	render() {
		return (
			<div className="container App">
				<div className="row">
					{characters.map(character =>
						<ClickImage name={character.name} image={character.image}/>
					)}
				</div>
			</div>
		);
	}
}

export default App;
