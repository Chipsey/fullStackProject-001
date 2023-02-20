import React, { Component } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classNames from "classnames";
import { loginUser } from "../../actions/authActions";

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

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.loginUser(userData);
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { errors } = this.state;

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
            <Link to="/" className="nav-link">
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
                        className={classNames("login--email-input", {
                          "is-invalid": errors.email,
                        })}
                        size="small"
                        value={this.state.email}
                        onChange={this.onChange}
                        color="primary"
                        name="email"
                      />
                      {errors.email && (
                        <div className="invalid-feedback">{errors.email}</div>
                      )}
                    </div>

                    <div className="login--input">
                      <TextField
                        id="outlined-basic"
                        className={classNames("login-pass-input", {
                          "is-invalid": errors.password,
                        })}
                        label="Password"
                        variant="outlined"
                        value={this.state.password}
                        onChange={this.onChange}
                        size="small"
                        type="password"
                        name="password"
                      />
                      {errors.password && (
                        <div className="invalid-feedback">
                          {errors.password}
                        </div>
                      )}
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

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(Login);
