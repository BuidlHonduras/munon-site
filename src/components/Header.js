import React from "react";
import logo from "../logo.png";
import { Button, Container } from "reactstrap";
import Web3 from "web3";
import rp from "request-promise";

export default class Header extends React.Component {
  state = { pot: 0 };
  componentDidMount() {
    const web3 = new Web3(
      "https://mainnet.infura.io/v3/e5c25f3dc3964544b151681ca6806c98",
      null,
      {}
    );

    this.getBalance(web3);
    this.getUSD();
  }

  async getBalance(web3) {
    const sponsorsBalance = await web3.eth.getBalance(
      "0x3b95C834aa3DDC5E7B69e047Bd1eB1604B76f2C3"
    );
    const hackathonBalance = await web3.eth.getBalance(
      "0x730bF3B67090511A64ABA060FbD2F7903536321E"
    );
    const pot = parseFloat(
      web3.utils.fromWei(sponsorsBalance + hackathonBalance, "ether")
    ).toFixed(4);
    this.setState({ pot });
  }

  async getUSD() {
    const requestOptions = {
      method: "GET",
      uri: "https://pro-api.coinmarketcap.com/v1/tools/price-conversion",
      qs: {
        id: "1",
        amount: "50",
        convert: "GPB,LTC,USD"
      },
      headers: {
        "X-CMC_PRO_API_KEY": "2b49785b-6dcc-486f-9eb7-71681bc5fcb0"
      },
      json: true,
      gzip: true
    };

    rp(requestOptions)
      .then(response => {
        console.log("API call response:", response);
      })
      .catch(err => {
        console.log("API call error:", err.message);
      });
  }

  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className="mt-4">
          <b>Current Total Pot: {this.state.pot} ETH</b>
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
