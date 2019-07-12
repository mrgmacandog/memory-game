import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClickImage from './components/ClickImage';

function App() {
	return (
		<div className="container App">
			<div className="row">
				<ClickImage />
				<ClickImage />
				<ClickImage />
				<ClickImage />
			</div>
		</div>
	);
}

export default App;
