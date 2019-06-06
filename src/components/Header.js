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
        <div>
          <Button
            color="danger"
            size="lg"
            target="blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSduswTNe07wUka91lgCXYyg1MNjW458QNYQtJh0v5t4TNqrOw/viewform?usp=sf_link"
          >
            Pre-Register
          </Button>
        </div>

        {
          //   <div className="mt-4">
          //    <Button color="danger" size="lg" disabled>
          //    Hack in TGU
          //  </Button>
          //  <Button color="danger" size="lg" className="ml-4" disabled>
          //    Hack in SPS
          //  </Button>
          //</div>
        }
      </header>
    );
  }
}
