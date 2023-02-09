import React, { Component } from 'react';

import {motion} from "framer-motion";

class Registration extends Component {
  render() {
    return (
      <motion.div
      initial={{opacity: 0, y:"1%"}}
      animate = {{opacity: 1, y:"0%"}}
      transition={{ duration:0.75, ease:"easeOut"}}>
        <h1>Registration Works!</h1>
      </motion.div>
    )
  }
}


export default Registration;