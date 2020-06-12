import React, { useState } from "react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";
import { MenuItem } from "semantic-ui-react";
import image from "../Images/page.jpg";
import aapImage from "../Images/aap.jpg";
import bjpImage from "../Images/BJP.jpg";
import congressImage from "../Images/Congress.jpg";
import arrow from "../Images/arrow.png";
import * as axios from "axios";
import "../Css/Page.css";
import "../Css/Navigation.css";
import "../Css/Voting.css";

export const Voting = (props) => {
  const [BJP] = useState("BJP");
  const [Congress] = useState("congress");
  const [OTHER] = useState("other");

  const { user } = props;

  async function handleBJP(result) {
    console.log('result---->', result)
    const obj = {
      voterId: user.voterId,
      vote: result,
      state: user.state,
    };
    await axios
      .post("http://localhost:3002/voting/vote", obj)
      .then(async (response) => {
        if (response) alert('Your vote has been casted successfully to ' + result)
      })
      .catch(err => alert(err))
  }

  return (
    <div>
      <Navigation />
      <img src={image} alt="page" className="image" />
      <div className="grid">
        <p>1.</p>
        <p>BJP</p>
        <img src={bjpImage} alt="BJP" className="party-image" />
        <img src={arrow} alt="BJP" className="arrow-image" />
        <button>
          <Link style={{ textDecoration: "none", color: "white" }}>
            <MenuItem value="BJP" onClick={async() => {
              const obj = {
                voterId: user.voterId,
                vote: 'BJP',
                state: user.state,
              };
              await axios
                .post("http://localhost:3002/voting/vote", obj)
                .then(async (response) => {
                  if (response) alert('Your vote has been casted successfully to BJP')
                })
                .catch(err => alert(err))
            }}>
              Click here
            </MenuItem>
          </Link>
        </button>
        <p>2.</p>
        <p>CONGRESS</p>
        <img src={congressImage} alt="Congress" className="party-image" />
        <img src={arrow} alt="Congress" className="arrow-image" />
        <button>
          <Link style={{ textDecoration: "none", color: "white" }}>
            <MenuItem
              onClick={async () => {
                const obj = {
                  voterId: user.voterId,
                  vote: 'congress',
                  state: user.state,
                };
                await axios
                  .post("http://localhost:3002/voting/vote", obj)
                  .then(async (response) => {
                    if (response) alert('Your vote has been casted successfully to Congress')
                  })
                  .catch(err => alert(err))
              }}
            >
              Click here
            </MenuItem>
          </Link>
        </button>
        <p>3.</p>
        <p>AAM ADMI PARTY</p>
        <img src={aapImage} alt="AAP" className="party-image" />
        <img src={arrow} alt="AAP" className="arrow-image" />
        <button>
          <Link style={{ textDecoration: "none", color: "white" }}>
            <MenuItem
              onClick={async () => {
                const obj = {
                  voterId: user.voterId,
                  vote: 'other',
                  state: user.state,
                };
                await axios
                  .post("http://localhost:3002/voting/vote", obj)
                  .then(async (response) => {
                    if (response) alert('Your vote has been casted successfully to Other')
                  })
                  .catch(err => alert(err))
              }}
            >
              Click here
            </MenuItem>
          </Link>
        </button>
      </div>
      <Footer />
    </div>
  );
};
