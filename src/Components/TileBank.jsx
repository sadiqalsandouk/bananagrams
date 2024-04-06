import React from "react"
import { SortableContext } from "@dnd-kit/sortable"
import Tile from "./Tile"

const TileBank = ({ tiles, tileLetters }) => {
  return (
    <div className="TileBank">
      <h1>Tile Bank</h1>
      <SortableContext items={tiles}>
        <div className="tiles">
          {tiles.map((tileId, index) => (
            <Tile letter={tileLetters[index]} key={tileId} id={tileId} />
          ))}
        </div>
      </SortableContext>
    </div>
  )
}

export default TileBank
