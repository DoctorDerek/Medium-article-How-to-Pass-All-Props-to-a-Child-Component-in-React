import React from "react"

import DisplayAllProps from "./DisplayAllProps"
import ChildComponent from "./ChildComponent"

const ParentComponent = (props) => (
  <section>
    <h1>ParentComponent's props:</h1>
    <DisplayAllProps {...props}></DisplayAllProps>
    <ChildComponent {...props}></ChildComponent>
  </section>
)

export default ParentComponent
