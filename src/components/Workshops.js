import React from "react";
import { Button } from "reactstrap";
import logo from "../logo.png";
import erc20 from "../images/erc20.png";

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
                    <button type="button" className="btn btn-danger btn-block">
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img
                  src={logo}
                  width="100%"
                  height="225"
                  background="#55595c"
                  color="#eceeef"
                  className="card-img-top tba"
                  text="Thumbnail"
                />
                <div className="card-body">
                  <h5 className="card-title mb-0">
                    Taller: Introducción a Solidity
                  </h5>
                  <small className="text-muted">TBA - SPS</small>
                  <p className="card-text mt-2">
                    Aprende a crear tu primer Aplicación decentralizada en
                    Ethereum.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <button
                      type="button"
                      className="btn btn-danger btn-block disabled"
                    >
                      To be Announced
                    </button>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img
                  src={logo}
                  width="100%"
                  height="225"
                  background="#55595c"
                  color="#eceeef"
                  className="card-img-top tba"
                  text="Thumbnail"
                />
                <div className="card-body">
                  <h5 className="card-title mb-0">
                    Taller: IPFS, Archivos en el Blockchain
                  </h5>
                  <small className="text-muted">TBA - Online</small>
                  <p className="card-text mt-2">
                    Aprende a guardar archivos o publicar páginas
                    decentralizadas usando IPFS.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <button
                      type="button"
                      className="btn btn-danger btn-block disabled"
                    >
                      To be Announced
                    </button>
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
