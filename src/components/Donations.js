import React from "react";
import uncle from "../images/uncle.jpg";

export default class Donations extends React.Component {
  render() {
    return (
      <div className="container donations mt-4 text-center" id="donations">
        <h1>Donations</h1>
        <p className="mt-4">
          Muñón is only posible with the support of the Community, if you wish
          to back the Hackathon send an email to:{" "}
          <a href="mailto:ceegarner@gmail.com" className="primary">
            ceegarner@gmail.com
          </a>
          .
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
