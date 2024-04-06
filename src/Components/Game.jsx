import React, { useState } from "react"
import { DndContext } from "@dnd-kit/core"
import TileBank from "./TileBank"
import Board from "./Board"
import { generateRandomLetter } from "../Utils/utils"

const Game = () => {
  // State for tile bank
  const [tiles, setTiles] = useState(
    Array.from({ length: 10 }, (_, index) => `tile-${index}`)
  )

  // Generate random letters for each tile
  const [tileLetters, setTileLetters] = useState(() =>
    Array.from({ length: 10 }, () => generateRandomLetter())
  )

  // State for board
  const rows = 10
  const cols = 10
  const initialBoardState = Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => null)
  )
  const [boardState, setBoardState] = useState(initialBoardState)

  // Handler for drag end
  const handleDragEnd = (event) => {
    const { active, over } = event
    // Extract the tile ID from the active draggable item
    const tileId = active.id
    // Extract the cell ID from the over droppable area
    const cellId = over.id
    // Update the board state to reflect the placement of the tile
    setBoardState((prevBoardState) => ({
      ...prevBoardState,
      [cellId]: tileId,
    }))
    // Remove the tile from the TileBank
    setTiles((prevTiles) => prevTiles.filter((id) => id !== tileId))
    // Remove the corresponding letter from tileLetters
    setTileLetters((prevLetters) => {
      const index = tiles.indexOf(tileId)
      if (index !== -1) {
        const newLetters = [...prevLetters]
        newLetters.splice(index, 1)
        return newLetters
      }
      return prevLetters
    })
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="Game">
        <TileBank tiles={tiles} tileLetters={tileLetters} />
        <Board
          rows={rows}
          cols={cols}
          boardState={boardState}
          tileLetters={tileLetters}
        />
      </div>
    </DndContext>
  )
}

export default Game
