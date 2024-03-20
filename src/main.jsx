import React from "react"
import ReactDOM from "react-dom/client"
import PlayerHand from "./Components/PlayersHand"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PlayerHand numberOfTiles={7} />
  </React.StrictMode>
)
