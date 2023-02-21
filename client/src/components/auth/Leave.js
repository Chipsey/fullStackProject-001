import React, { Component } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

class Leave extends Component {
  render() {
    return (
      <motion.div
        initial={{ opacity: 0, y: "1%" }}
        animate={{ opacity: 1, y: "0%" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className={this.props.mode}
      >
        <div className="leave">
          <h1>Leave is Working!!</h1>
          <Link to="/dashboard">
            <button className="leave--leaveButton">Close</button>
          </Link>
        </div>
      </motion.div>
    );
  }
}

export default Leave;
