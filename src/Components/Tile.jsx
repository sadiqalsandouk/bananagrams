import React from "react"
import styled from "styled-components"
import { useDraggable } from "@dnd-kit/core"

const StyledTile = styled.div`
  background-color: #ffffff;
  color: black;
  border: 1px solid #000000;
  width: 35px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const Tile = ({ id, letter }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  })

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : "none",
  }

  return (
    <StyledTile ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {letter}
    </StyledTile>
  )
}

export default Tile
