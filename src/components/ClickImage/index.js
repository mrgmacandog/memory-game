import React from "react";
import "./style.css";

function ClickImage(props) {
    return (
        <div className="col-md-3" onClick={() => props.updateScore(props.id)}>
            <div className="card">
                {/* <div className="img-container"> */}
                    <img alt={props.name} src={props.image} />
                {/* </div> */}
            </div>
        </div>
    );
}

export default ClickImage;