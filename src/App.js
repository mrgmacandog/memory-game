import React from "react";
import "./App.css";
import ClickImage from "./components/ClickImage";
import characters from "./characters.json";

function App() {
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

export default App;
