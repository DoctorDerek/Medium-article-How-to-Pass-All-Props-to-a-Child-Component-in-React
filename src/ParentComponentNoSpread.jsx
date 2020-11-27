import React from "react"

import DisplayAllProps from "./DisplayAllProps"
import ChildComponent from "./ChildComponent"

const ParentComponentNoSpread = (props) => (
  <section>
    <h1>ParentComponent's props:</h1>
    <DisplayAllProps
      name={props.name}
      job={props.job}
      children={props.children}
    ></DisplayAllProps>
    <ChildComponent
      name={props.name}
      job={props.job}
      children={props.children}
    ></ChildComponent>
  </section>
)

export default ParentComponent
