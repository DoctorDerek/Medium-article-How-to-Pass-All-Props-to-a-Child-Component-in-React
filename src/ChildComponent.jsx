import React from "react"

import DisplayAllProps from "./DisplayAllProps"

const ChildComponent = (props) => (
  <React.Fragment>
    <h1>GrandChild's props:</h1>
    <DisplayAllProps {...props}></DisplayAllProps>
  </React.Fragment>
)

export default ChildComponent
