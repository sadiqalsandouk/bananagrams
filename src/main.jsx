import React from "react"
import ReactDOM from "react-dom/client"
import TileBank from "./Components/TileBank"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TileBank numberOfTiles={7} />
  </React.StrictMode>
)
