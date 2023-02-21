import React, { Component } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Dashboard extends Component {
  render() {
    return (
      <motion.div
        initial={{ opacity: 0, y: "1%" }}
        animate={{ opacity: 1, y: "0%" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className={this.props.mode}
      >
        <h1>Dashboard is Working!!</h1>
        <Link to="/leave">
          <button className="dashboard--leaveButton">Request Leave</button>
        </Link>
      </motion.div>
    );
  }
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Dashboard);
