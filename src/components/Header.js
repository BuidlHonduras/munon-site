import React from "react";
import logo from "../logo.png";
import { Button, Container } from "reactstrap";

export default class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Experience a decentralized hackathon that fosters your creativity and
          rewards you with tangible and transparent feedback.
        </p>
        <Container className="row pt-4 mt-2 pb-4">
          <div className="col-md-6 col-xs-12 mb-4">
            <Button
              color="danger"
              className="w-75"
              size="lg"
              target="blank"
              href="https://dapp.munonhack.com"
            >
              Register
            </Button>
          </div>
          <div className="col-md-6 col-xs-12">
            <Button
              color="danger"
              className="w-75"
              size="lg"
              target="blank"
              href="https://dev.to/crisgarner/como-registrarse-en-el-munon-22mi"
            >
              Registration Tutorial
            </Button>
          </div>
        </Container>

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
