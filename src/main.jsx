import React from "react"
import ReactDOM from "react-dom"
import Game from "./Components/Game"
import "./index.css"

const App = () => {
  return (
    <div className="App">
      <Game />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)
