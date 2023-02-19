import React, { Component } from "react";
import { motion } from "framer-motion";
import TextField from "@mui/material/TextField";

class ForgotPassword extends Component {
  render() {
    return (
      <motion.div
        initial={{ opacity: 0, y: "1%" }}
        animate={{ opacity: 1, y: "0%" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className={this.props.mode}
      >
        <div className="fp--home">
          <div className="fp-content-background"></div>

          <img src="keyblack.png" alt="key" className="fp--key"></img>
          <div className="fp-devider"></div>
          <div className="fp--content2">
            <p className="fp--p">FORGOT PASSWORD</p>

            <img
              src="fingerprintblack.png"
              alt="fingerprint"
              className="fp--finger"
            ></img>

            <div className="fp--buttons">
              <div className="fp--input">
                <TextField
                  id="outlined-basic"
                  label="UserName"
                  variant="outlined"
                  size="small"
                  color="primary"
                />
              </div>
            </div>
            <div className="fp--buttons">
              <a href="www.google.lk">
                <button className="fp--button-si">Submit</button>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
}

export default ForgotPassword;
