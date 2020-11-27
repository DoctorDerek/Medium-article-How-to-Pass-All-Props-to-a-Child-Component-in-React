import React from "react"

import DisplayAllProps from "./DisplayAllProps"
import GrandChild from "./ChildComponent"

const ParentComponent = (props) => (
  <section>
    <h1>ChildComponent's props:</h1>
    <DisplayAllProps {...props}></DisplayAllProps>
    <GrandChild {...props}></GrandChild>
  </section>
)

export default ParentComponent
