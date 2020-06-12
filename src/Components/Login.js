import React, { useState } from "react";
import { List, MenuItem } from "semantic-ui-react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";
import { Array } from "../helpers";
import image from "../Images/page.jpg";
import * as moment from "moment";
import * as axios from "axios";
import "../Css/Page.css";
import "../Css/Register.css";
import "../Css/Login.css";
import { Voting } from "./Voting";

export const Login = () => {
  const [voterId, setVoterId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(false);

  const handleSubmit = async () => {
    let status = true;
    if (voterId === "" || email === "" || password === "") status = false;
    if (status === false) alert("Incomplete Details");
    else {
      const object = {
        voterId,
        email,
        password,
      };
      await axios
        .post("http://localhost:3002/voting/login", object)
        .then(async (res) => {
          if (res.status === 200) {
            const users = await axios.get(
              "http://localhost:3002/voting/getUsers"
            );
            const user = users.data.filter(
              (res) => res.voterId === voterId && res.email === email
            );
            if (user.length === 0) alert("User not found..");
            setUser(user[0]);
            const state = Array.filter((res) => res.state === user[0].state);
            console.log("handleSubmit -> state", state);
            console.log(
              moment().valueOf() +
                "  " +
                state[0].date.valueOf() +
                "  " +
                moment().valueOf() +
                "  " +
                state[0].date.valueOf() +
                86400000
            );
            if (
              moment().valueOf() > moment(state[0].date).valueOf() &&
              moment().valueOf() < moment(state[0].date).valueOf() + 86400000
            ) {
              setLoggedIn(true);
            } else
              alert(
                "Your voting date is " + moment(state[0].date).format("LLLL")
              );
          }
        })
        .catch((err) => {
          console.log(err);
          alert("Incorrect Details..");
        });
    }
  };
  return loggedIn ? (
    <Voting user={user} />
  ) : (
    <div>
      <Navigation />
      <img src={image} alt="page" className="image" />
      <div className="login">
        <h1>Login</h1>
        <List>
          <List.Item>
            <input
              value={voterId}
              onChange={(e) => setVoterId(e.target.value)}
              type="text"
              name="voterId"
              placeholder="Voter Id"
              className="full-textarea"
              required
            />
          </List.Item>
          <List.Item>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              name="email"
              placeholder="Email Address"
              className="full-textarea"
              required
            />
          </List.Item>
          <List.Item>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              placeholder="Password"
              className="full-textarea"
              required
            />
          </List.Item>
          <button>
            <Link style={{ textDecoration: "none", color: "black" }}>
              <MenuItem className="login-button" onClick={handleSubmit}>
                Login
              </MenuItem>
            </Link>
          </button>
        </List>
      </div>
      <Footer />
    </div>
  );
};
