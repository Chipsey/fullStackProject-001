import React, { Component } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";

import { motion } from "framer-motion";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password,
    };

    console.log(user);
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <motion.div
        initial={{ opacity: 0, y: "1%" }}
        animate={{ opacity: 1, y: "0%" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className={this.props.mode}
      >
        <div className="login--home">
          <div className="login-content-background"></div>

          <video src="login--vid.mp4" autoPlay loop muted width="100%"></video>

          <div className="login--content">
            <Link className="nav-link" to="/">
              <img
                src="logo.png"
                alt="logo"
                width="300px"
                className="login--logo"
              ></img>
            </Link>
            <h1 className="login--title1">DOWNLOAD</h1>
            <h4 className="login--p1">Our mobile app</h4>

            <div>
              <img
                src="appstore.png"
                alt="appStore--icon"
                width="40px"
                className="login-store--logo"
              ></img>
              <img
                src="playstore.png"
                alt="playStore--icon"
                width="20px"
                className="login-store--logo"
              ></img>
            </div>
            <p className="login-mobile--content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              eius recusandae.
            </p>

            <div>
              <button className="login-button--gs">DOWNLOAD</button>
            </div>
          </div>

          <div className="login-devider"></div>

          <div className="login-right--align2">
            <div className="login-right--align">
              <div className="login--content2">
                <p className="login--p">LOG IN</p>

                <form onSubmit={this.onSubmit}>
                  <div className="login--buttons">
                    <div className="login--input">
                      <TextField
                        id="outlined-basic1"
                        label="UserName"
                        variant="outlined"
                        className="login--email-input"
                        size="small"
                        value={this.state.email}
                        onChange={this.onChange}
                        color="primary"
                        name="email"
                      />
                    </div>

                    <div className="login--input">
                      <TextField
                        id="outlined-basic"
                        className="login-pass-input"
                        label="Password"
                        variant="outlined"
                        value={this.state.password}
                        onChange={this.onChange}
                        size="small"
                        type="password"
                        name="password"
                      />
                    </div>
                  </div>
                  <div className="login--buttons">
                    <a href="google.lk">
                      <button className="button--si">
                        <img
                          src="lock--icon.png"
                          alt="icon"
                          width="12px"
                          className="lock--icon"
                        ></img>{" "}
                        LOG IN
                      </button>
                    </a>

                    <Link className="nav-link" to="/forgotpassword">
                      <button className="button--fogotpass">
                        {" "}
                        Fogot Password?
                      </button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
}

export default Login;
