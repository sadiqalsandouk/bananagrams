import Tile from "./Tile"

const TileBank = ({ numberOfTiles }) => {
  const tiles = Array.from({ length: numberOfTiles }, (_, index) => (
    <Tile key={index} />
  ))

  return (
    <div className="player-hand">
      <h1>Tile Bank</h1>
      <div className="tiles">{tiles}</div>
    </div>
  )
}

export default TileBank
