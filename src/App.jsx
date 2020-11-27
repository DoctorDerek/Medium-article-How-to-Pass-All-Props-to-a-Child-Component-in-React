import React from "react"
import "./styles.css"
import ParentComponent from "./ParentComponent"

const App = () => (
  <div className="App">
    <ParentComponent name="Johnny" job="👨‍🎤">
      🌟
    </ParentComponent>
  </div>
)

export default App
