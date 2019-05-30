import React from "react";
import uncle from "../images/uncle.jpg";

export default class Donations extends React.Component {
  render() {
    return (
      <div className="container donations mt-4 text-center" id="donations">
        <h1>Donations</h1>
        <p className="mt-4">
          This Hackathon Munon is powered by these awesome sponsors.
        </p>
        <div className="container mt-4 pt-4">
          <div className="row">
            <div className="col-sm">
              <img
                src={uncle}
                alt="..."
                className="horizontal img-thumbnail rounded-circle"
              />
              <p>You</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
