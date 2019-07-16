import React from "react";
import "./style.css";

function Header(props) {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="/">Memory Game</a>
            <p>Click an image!</p>
            <div>
                <p>Current Score: {props.currScore}</p>
                <p>High Score: {props.highScore}</p>
            </div>
        </nav>
    );
}

export default Header;