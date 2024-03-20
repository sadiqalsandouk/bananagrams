import React from "react"
import Tile from "./Tile"

const PlayerHand = ({ numberOfTiles }) => {
  const tiles = Array.from({ length: numberOfTiles }, (_, index) => (
    <Tile key={index} />
  ))

  return (
    <div className="player-hand">
      <h1>Player's Hand</h1>
      <div className="tiles">{tiles}</div>
    </div>
  )
}

export default PlayerHand
