import React, { Component } from "react";
import TextField from "@mui/material/TextField";

import { motion } from "framer-motion";

class About extends Component {
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

          <div className="login--content">
            <img
              src="logo.png"
              alt="logo"
              width="300px"
              className="login--logo"
            ></img>
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

                <div className="login--buttons">
                  <div className="login--input">
                    <TextField
                      id="outlined-basic"
                      label="UserName"
                      variant="outlined"
                      size="small"
                      color="primary"
                    />
                  </div>

                  <div className="login--input">
                    <TextField
                      id="outlined-basic"
                      label="Password"
                      variant="outlined"
                      size="small"
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

                  <a href="google.lk">
                    <button className="button--fogotpass">
                      {" "}
                      Fogot Password?
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
}

export default About;
