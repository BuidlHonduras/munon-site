import React from "react";
import logo from "../logo.png";
import { Button, Container } from "reactstrap";
import Web3 from "web3";
import axios from "axios";

export default class Header extends React.Component {
  state = { pot: 0, usdBalance: 0, totalPot: 0 };
  componentDidMount() {
    const web3 = new Web3(
      "https://mainnet.infura.io/v3/e5c25f3dc3964544b151681ca6806c98",
      null,
      {}
    );

    this.getBalance(web3);
  }

  async getBalance(web3) {
    const sponsorsBalance = await web3.eth.getBalance(
      "0x3b95C834aa3DDC5E7B69e047Bd1eB1604B76f2C3"
    );
    const hackathonBalance = await web3.eth.getBalance(
      "0x380a9a27227d28E47F412fdBB073C9e1A049E0B1"
    );
    console.log(sponsorsBalance);
    console.log(hackathonBalance);
    const pot = parseFloat(
      web3.utils.fromWei(sponsorsBalance + hackathonBalance, "ether")
    ).toFixed(4);
    const totalPot = parseFloat(
      web3.utils.fromWei(sponsorsBalance + hackathonBalance, "ether")
    );

    this.setState({ pot, totalPot });
    this.getUSD();
  }

  async getUSD() {
    const requestOptions = {
      method: "GET",
      url: "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=ETH,USD"
    };

    const response = await axios(requestOptions);
    const usdBalance = parseFloat(
      this.state.totalPot * response.data.USD
    ).toFixed(2);
    this.setState({ usdBalance });
  }

  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className="mt-4">
          <b>Current Total Pot: {this.state.pot} ETH</b>
          <br /> <small> or ${this.state.usdBalance}</small>
        </h2>
        <p className="mt-4">
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
