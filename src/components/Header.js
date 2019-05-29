import React from "react";
import logo from "../logo.png";
import { Button } from "reactstrap";

export default class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Experience a decentralized hackathon that fosters your creativity and
          rewards you with tangible and transparent feedback.
        </p>
        <div className="mt-4">
          <Button color="danger" size="lg">
            Hack in TGU
          </Button>
          <Button color="danger" size="lg" className="ml-4">
            Hack in SPS
          </Button>
        </div>
      </header>
    );
  }
}
