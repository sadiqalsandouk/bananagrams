import React from "react"
import styled from "styled-components"
import { useDroppable } from "@dnd-kit/core"
import Tile from "./Tile"

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.cols}, 1fr);
`

const Cell = styled.div`
  border: 1px solid black;
  width: 35px;
  height: 45px;
`

const Board = ({ rows, cols, boardState, tileLetters }) => {
  return (
    <Grid cols={cols}>
      {Array.from({ length: rows * cols }, (_, index) => (
        <CellDropZone
          key={index}
          id={`cell-${index}`}
          boardState={boardState}
          tileLetters={tileLetters}
        />
      ))}
    </Grid>
  )
}

const CellDropZone = ({ id, boardState, tileLetters }) => {
  const droppable = useDroppable({
    id,
  })

  const tileId = boardState[id] // Get the ID of the tile in the current cell

  return (
    <Cell {...droppable.attributes} ref={droppable.setNodeRef}>
      {tileId && <Tile id={tileId} letter={tileLetters[tileId]} />}
    </Cell>
  )
}

export default Board
