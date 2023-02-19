import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className={this.props.mode}>
        <nav>
          <Link className="nav-link" to="/">
            <img src="logo.png" alt="logo" className="nav--logo"></img>
          </Link>
          <ul className="nav--list">
            <li></li>
            <li>
              <Link className="nav-link" to="/">
                HOME
              </Link>
            </li>

            <li>
              <Link className="nav-link" to="/login">
                MOBILE
              </Link>
            </li>

            <li>
              <Link className="nav-link" to="/login">
                LOGIN
              </Link>
            </li>

            <li>
              <Link className="nav-link">ABOUT</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
