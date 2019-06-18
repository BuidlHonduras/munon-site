import React from "react";
import buidl from "../images/buidl-logo.png";
import affogato from "../images/affogato.svg";
import cocomfy from "../images/cocomfy-logo.jpeg";
import widu from "../images/widu.png";
import impact from "../images/impact.png";
import lumina from "../images/lumina.png";

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
              <a href="http://buidlhonduras.com/" target="blank">
                <img src={buidl} alt="..." className="vertical" />
              </a>
            </div>
            <div className="col-sm">
              <a href="https://affogato.co/" target="blank">
                <img src={affogato} alt="..." className="horizontal" />
              </a>
            </div>
            <div className="col-sm">
              <a href="http://cocomfy.com/" target="blank">
                <img src={cocomfy} alt="..." className="horizontal" />
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <a href="https://www.widu.io/" target="blank">
                <img src={widu} alt="..." className="horizontal" />
              </a>
            </div>
            <div className="col-sm">
              <a href="https://tegucigalpa.impacthub.net/" target="blank">
                <img src={impact} alt="..." className="vertical" />
              </a>
            </div>
            <div className="col-sm">
              <a href="https://www.lumminatech.com" target="blank">
                <img src={lumina} alt="..." className="horizontal" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
