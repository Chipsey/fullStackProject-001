import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CompatRouter } from "react-router-dom-v5-compat";

import { Provider } from "react-redux";
import store from "./store";

import "./style.css";

import Navbar from "./components/layout/Navbar";
import Content from "./components/layout/Content";
import Login from "./components/auth/Login";
import Registration from "./components/auth/Registration";
import About from "./components/auth/About";
import ForgotPassword from "./components/auth/ForgotPassword";
import Dashboard from "./components/auth/Dashboard";
import Leave from "./components/auth/Leave";

let date = new Date();
const hours = date.getHours();
let mode;
if (hours >= 6 && hours <= 20) {
  mode = "light";
} else {
  mode = "dark";
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar mode={mode} />
            <CompatRouter>
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => <Content mode={mode} {...props} />}
                ></Route>
                <Route
                  exact
                  path="/login"
                  render={(props) => <Login mode={mode} {...props} />}
                ></Route>
                <Route
                  exact
                  path="/register"
                  render={(props) => <Registration mode={mode} {...props} />}
                ></Route>
                <Route
                  exact
                  path="/about"
                  render={(props) => <About mode={mode} {...props} />}
                ></Route>
                <Route
                  exact
                  path="/forgotpassword"
                  render={(props) => <ForgotPassword mode={mode} {...props} />}
                ></Route>
                <Route
                  exact
                  path="/dashboard"
                  render={(props) => <Dashboard mode={mode} {...props} />}
                ></Route>
                <React.Fragment>
                  <Route
                    exact
                    path="/leave"
                    render={(props) => <Dashboard mode={mode} {...props} />}
                  ></Route>
                  <Route
                    exact
                    path="/leave"
                    render={(props) => <Leave mode={mode} {...props} />}
                  ></Route>
                </React.Fragment>
              </Switch>
            </CompatRouter>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
