import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClickImage from './components/ClickImage';
import friends from "./friends.json";

function App() {
	return (
		<div className="container App">
			<div className="row">
				{friends.map(friend =>
					<ClickImage name={friend.name} image={friend.image}/>
				)}
			</div>
		</div>
	);
}

export default App;
