import React from "react";
import ahmed from "../images/contributors/ahmed.jpeg";
import antonio from "../images/contributors/antonio.jpg";
import cristian from "../images/contributors/cristian.jpg";
import franco from "../images/contributors/franco.jpg";
import john from "../images/contributors/john.jpg";
import oscar from "../images/contributors/oscar.jpeg";
import robert from "../images/contributors/robert.jpeg";
import uncle from "../images/uncle.jpg";

export default class Donations extends React.Component {
  render() {
    return (
      <div className="container donations mt-4 text-center" id="donations">
        <h1>Contributors</h1>
        <p className="mt-4">
          Muñón is only posible with the support of the Community, if you wish
          to make a donation to the pot or back the Hackathon send an email to:
          <a href="mailto:ceegarner@gmail.com" className="primary">
            ceegarner@gmail.com
          </a>
          .
        </p>
        <div className="container mt-4 pt-4">
          <div className="row">
            <div className="col-sm">
              <img
                src={ahmed}
                alt="..."
                className="horizontal img-thumbnail rounded-circle"
              />
              <p>Ahmed Castro</p>
            </div>
            <div className="col-sm">
              <img
                src={antonio}
                alt="..."
                className="horizontal img-thumbnail rounded-circle"
              />
              <p>Antonio Cárdenas</p>
            </div>
            <div className="col-sm">
              <img
                src={cristian}
                alt="..."
                className="horizontal img-thumbnail rounded-circle"
              />
              <p>Cristian Espinoza</p>
            </div>
            <div className="col-sm">
              <img
                src={franco}
                alt="..."
                className="horizontal img-thumbnail rounded-circle"
              />
              <p>Franco Midence</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <img
                src={john}
                alt="..."
                className="horizontal img-thumbnail rounded-circle"
              />
              <p>John Mackay</p>
            </div>
            <div className="col-sm">
              <img
                src={oscar}
                alt="..."
                className="horizontal img-thumbnail rounded-circle"
              />
              <p>Oscar Presidente</p>
            </div>
            <div className="col-sm">
              <img
                src={robert}
                alt="..."
                className="horizontal img-thumbnail rounded-circle"
              />
              <p>Oscar Presidente</p>
            </div>
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
