import React from "react"

import DisplayAllProps from "./DisplayAllProps"
import ChildComponent from "./ChildComponent"

const ParentComponent = (props) => (
  <section>
    <h1>ParentComponent's props:</h1>
    <DisplayAllProps
      name={props.name}
      job={props.job}
      children={props.children}
    ></DisplayAllProps>
    {/* Both methods to pass children are equivalent */}
    <ChildComponent name={props.name} job={props.job}>
      {props.children}
    </ChildComponent>
  </section>
)

export default ParentComponent
