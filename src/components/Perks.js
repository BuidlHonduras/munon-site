import React from "react";
import swag from "../images/swag.jpg";
import pot from "../images/pot.png";
import team from "../images/team.jpg";

export default class Perks extends React.Component {
  render() {
    return (
      <div className="row perks" id="perks">
        <div className="col-sm">
          <img src={pot} alt="..." className="rounded-circle pot" />
          <h3>Pot</h3>
          <p>
            Participants will stake money at the start of the hackathon. This
            money will be the pot split between the winners
          </p>
        </div>
        <div className="col-sm">
          <img src={swag} alt="..." className="rounded-circle swag" />
          <h3>Swag</h3>
          <p>
            All participants will receive stickers, shirts and BUIDL Honduras
            Tokens
          </p>
        </div>
        <div className="col-sm">
          <img src={team} alt="..." className="rounded-circle" />
          <h3>Learn</h3>
          <p>
            The objetive of this hackathon is that participants learn from each
            other, team work and helping others is rewarded as much as hacking
          </p>
        </div>
      </div>
    );
  }
}
