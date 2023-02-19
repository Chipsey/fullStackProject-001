import React, { Component } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

class Content extends Component {
  render() {
    return (
      <motion.div
        initial={{ opacity: 0, y: "1%" }}
        animate={{ opacity: 1, y: "0%" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className={this.props.mode}
      >
        <div className="gets--home">
          <div className="content--background"></div>
          <img src="gets5.png" alt="background" className="gets--back"></img>
          <div className="devider"></div>
          <div className="right--align">
            <div className="gets--content">
              <img
                src="logo.png"
                alt="logo"
                width="300px"
                className="logo"
              ></img>
              <p className="gets--p">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Commodi nihil expedita voluptate in perferendis culpa{" "}
              </p>
              <div className="gets--buttons">
                <Link to="/register">
                  <button className="button--gs">SIGNUP</button>
                </Link>
              </div>
              <div className="gets--buttons">
                <Link className="nav-link" to="/login">
                  <button className="button--si">LOG IN</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
}

export default Content;
