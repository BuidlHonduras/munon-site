import React from "react";
import { Button } from "reactstrap";
import logo from "../logo.png";
import erc20 from "../images/erc20.png";
import ipfs from "../images/IPFS.png";
import zepkit from "../images/Zepkit.png";
import vue from "../images/vue.png";
import angularcafe from "../images/angularcafe.jpeg";

export default class Workshops extends React.Component {
  render() {
    return (
      <div className="workshops py-5">
        <h1>Workshops</h1>
        <p className="mt-4 subtitle">
          Get ready to hack with these workshops that the community is
          organizing.
        </p>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img
                  src={vue}
                  width="100%"
                  height="225"
                  background="#55595c"
                  color="#eceeef"
                  className="card-img-top "
                  text="Thumbnail"
                />
                <div className="card-body">
                  <h5 className="card-title mb-0">
                    Taller: Contratos Inteligentes
                  </h5>
                  <small className="text-muted">June 7 - SPS</small>
                  <p className="card-text mt-2">
                    Aprende a crear tu primer contrato inteligente y app
                    decentralizada en el Blockchain de Ethereum usando Solidity
                    y Vue js.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <Button
                      className="btn btn-danger btn-block"
                      disabled
                      target="blank"
                    >
                      Finished
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img
                  src={erc20}
                  width="100%"
                  height="225"
                  background="#55595c"
                  color="#eceeef"
                  className="card-img-top"
                  text="Thumbnail"
                />
                <div className="card-body">
                  <h5 className="card-title mb-0">
                    Taller: Tokens y Coleccionables
                  </h5>
                  <small className="text-muted">June 8, 2019 - TGU</small>
                  <p className="card-text mt-2">
                    Aprender a crear tu propio token que puede ser usado como
                    una moneda y tokens únicos que pueden ser usados como
                    coleccionables.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <Button
                      className="btn btn-danger btn-block"
                      disabled
                      target="blank"
                    >
                      Finished
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img
                  src={angularcafe}
                  width="100%"
                  height="225"
                  background="#55595c"
                  color="#eceeef"
                  className="card-img-top "
                  text="Thumbnail"
                />
                <div className="card-body">
                  <h5 className="card-title mb-0">
                    Angular Meetup Cafe - Nuestra primera DAPP
                  </h5>
                  <small className="text-muted">June 20 - SPS</small>
                  <p className="card-text mt-2">
                    En este meetup hablaremos de como crear nuestra aplicación
                    descentralizada con angular + blockchain.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <Button
                      className="btn btn-danger btn-block"
                      href="https://www.facebook.com/events/598509827300304/"
                      target="blank"
                      disabled
                    >
                      Finished
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img
                  src={zepkit}
                  width="100%"
                  height="225"
                  background="#55595c"
                  color="#eceeef"
                  className="card-img-top "
                  text="Thumbnail"
                />
                <div className="card-body">
                  <h5 className="card-title mb-0">Smartcontracts con Zepkit</h5>
                  <small className="text-muted">June 25 - Online</small>
                  <p className="card-text mt-2">
                    Aprende la forma más fácil de crear una aplicación Web3 y
                    smartcontract con las herramientas más confiables en
                    Ethereum, Zepkit.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <Button
                      className="btn btn-danger btn-block"
                      href="https://www.meetup.com/buidl-tegucigalpa/events/262420004/"
                      target="blank"
                      disabled
                    >
                      Finished
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img
                  src={ipfs}
                  width="100%"
                  height="225"
                  background="#55595c"
                  color="#eceeef"
                  className="card-img-top "
                  text="Thumbnail"
                />
                <div className="card-body">
                  <h5 className="card-title mb-0">
                    Taller: Web del Mañana, IPFS
                  </h5>
                  <small className="text-muted">June 28 - Online</small>
                  <p className="card-text mt-2">
                    Aprende a usar un sistema distribuido para guardar archivos
                    o publicar aplicaciones decentralizadas usando el
                    InterPlanetary File System (IPFS).
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <Button
                      className="btn btn-danger btn-block"
                      href="https://www.meetup.com/buidl-tegucigalpa/events/261931532/"
                      target="blank"
                      disabled
                    >
                      Finished
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
