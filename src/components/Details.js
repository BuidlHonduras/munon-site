import React from "react";
import { Button } from "reactstrap";
import community from "../images/community.jpeg";
import mack from "../images/community.png";

export default class Details extends React.Component {
  render() {
    return (
      <div className="details text-left">
        <hr className="featurette-divider" />
        <div className="row featurette">
          <div className="col-md-6 pr-4">
            <h2 className="featurette-heading">What is Muñón?</h2>
            <p className="">
              The Hackathon Muñón was originally created at San Pedro Sula,
              Honduras by the local technology community around 2013. There have
              been <b>4 events</b> to date and the aim has always been to have a
              good time while creating, networking and getting feedback on what
              we do.
            </p>
            <Button color="danger" size="lg" href="#workshops">
              Participate in the Workshops
            </Button>
          </div>
          <div className="col-md-6">
            <img
              src={community}
              className="bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            />
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-6 order-md-2 mt-4 pl-4">
            <h2 className="featurette-heading mt-2 ">How it Works?</h2>
            <p className="lead">
              During every event, all participants create a pot by paying an
              entry fee, at the end of the event that pot will be distributed
              proportionally to how they did at the hackathon with the help of
              peer review. So for example, you could pay 10 bucks to enter and
              at the end, you would get 25 back, or 3 back depending on how the
              other participants perceive your work.
            </p>
            <Button color="danger" size="lg" href="https://dapp.munonhack.com">
              Join the Hacking
            </Button>
          </div>
          <div className="col-md-6 order-md-1">
            <img
              src={mack}
              className="bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            />
          </div>
        </div>
      </div>
    );
  }
}
