
function PlayerBuilding({location, side, mode}) {
  return (
    <div className={mode === 1 ? "singlePlayerBuilding" : "singePlayerBuildingArgentina"}>
        {location}{side}
    </div>
  )
}

export default PlayerBuilding