import React from "react";
import buidl from "../images/buidl-logo.png";
import affogato from "../images/Affogato-logo-horizontal.png";
import cocomfy from "../images/cocomfy-logo.jpeg";
import widu from "../images/widu.png";
import impact from "../images/impact.png";

export default class Sponsors extends React.Component {
  render() {
    return (
      <div className="container sponsors mt-4 text-center" id="sponsors">
        <h1>Sponsors</h1>
        <p className="mt-4">
          This Hackathon Muñón is powered by these awesome sponsors.
        </p>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <img src={buidl} alt="..." className="vertical" />
            </div>
            <div className="col-sm">
              <img src={affogato} alt="..." className="horizontal" />
            </div>
            <div className="col-sm">
              <img src={cocomfy} alt="..." className="horizontal" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <img src={widu} alt="..." className="horizontal" />
            </div>
            <div className="col-sm">
              <img src={impact} alt="..." className="vertical" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
