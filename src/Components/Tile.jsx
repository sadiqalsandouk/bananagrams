import Draggable from "react-draggable"
import styled from "styled-components"

const StyledTile = styled.div`
  background-color: #ffffff;
  color: black;
  border: 1px solid #000000;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const generateRandomLetter = () => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const randomIndex = Math.floor(Math.random() * alphabet.length)
  return alphabet[randomIndex]
}

const Tile = () => {
  const letter = generateRandomLetter()

  return (
    <Draggable>
      <StyledTile>{letter}</StyledTile>
    </Draggable>
  )
}

export default Tile
