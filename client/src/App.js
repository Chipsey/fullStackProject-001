import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './style.css';

import Navbar from './components/layout/Navbar';
import Content from './components/layout/Content';
import Login from './components/auth/Login';
import Registration from './components/auth/Registration';
import About from './components/auth/About';
import ForgotPassword from './components/auth/ForgotPassword';


let date = new Date()
const hours = date.getHours()
let mode
if (hours >= 6 && hours <= 20) {
    mode = "light"
}
else {
    mode = "dark"
}


class App extends Component {
  render(){
      return (
        <Router>
          <div>
            <Navbar mode = {mode}/>
              <Routes>
                  <Route exact path='/' element= {<Content mode = {mode}/>}></Route>
                  <Route exact path='/login' element= {<Login mode = {mode} />}></Route>
                  <Route exact path='/registration' element= {<Registration />}></Route>
                  <Route exact path='/about' element= {<About />}></Route>
                  <Route exact path='/forgotpassword' element= {<ForgotPassword />}></Route>
              </Routes>
          </div>
        </Router>
      )
  }
}

export default App;
