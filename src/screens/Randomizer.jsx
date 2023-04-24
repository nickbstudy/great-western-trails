import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setNeutrals, setPlayerBuildings, players, game  } from '../features/game/gameSlice'
import Neutral from '../components/Neutral'
import PlayerBuilding from '../components/PlayerBuilding'
import { useNavigate } from 'react-router-dom'

function Randomizer() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const greyTiles = useSelector((state) => state.game.neutrals)
  const playerTiles = useSelector((state) => state.game.playerBuildings)
  

  const gameMode = useSelector(game)
  const greySpaces = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
  
  
  // ------- remove later, this is for building only ---------
    // Test values for GWT (7 grey 12 player)

    /* Alt values for GWT: A (8 grey 10 player)
    const greyTiles = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    const playerTiles = ['A', 'B', 'A', 'B', 'A', 'B', 'A', 'B', 'B', 'A']
    */
  // ----------------- remove above --------------------------

  
  const handleRandomAgain = () => {

    const neutralOrder = []
    const playerSides = []
    if (gameMode === 1) {

      let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
      for (let i = 7; i >= 1; i--) {
          const thisLetter = getRndInteger(i)
          neutralOrder.push(letters[thisLetter])
          letters.splice(thisLetter, 1)
      }
      for (let i = 1; i <= 12; i++) {
          const chosen = Math.round(Math.random());
          // console.log(chosen)
          if(chosen === 1) {
              playerSides.push('a')
          } else {
              playerSides.push('b')
          }
      }
    }

    // GWT: A
    if (gameMode === 2) {
        let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
        for (let i = 8; i >= 1; i--) {
            const thisLetter = getRndInteger(i)
            neutralOrder.push(letters[thisLetter])
            letters.splice(thisLetter, 1)
        }
        for (let i = 1; i <= 10; i++) {
            const chosen = Math.round(Math.random());
            // console.log(chosen)
            if(chosen === 1) {
                playerSides.push('a')
            } else {
                playerSides.push('b')
            }
        }
    }

    dispatch(setNeutrals(neutralOrder))
    dispatch(setPlayerBuildings(playerSides)) 
  }

  function getRndInteger(max) {
    return Math.floor(Math.random() * max)
  }

  const gotoScoreboard = () => {
    navigate('/scorecard')
  }

  return (
    <div className='randomizerPage'>
      <div style={{padding: '13px', fontSize: '2.4rem', fontWeight: 600}}>Randomizer</div>
        <div className="neutralOrder">
          {greyTiles.map((tile, index) => {
            return (
              <Neutral letter={tile} space={greySpaces[index]} key={index} />
            )
          })}
        </div>
        <div className="playerBuildingsWrapper">
          {playerTiles.map((side, index) => {
              return (
                <PlayerBuilding side={side} location={index + 1} key={index} mode={gameMode}/>
              )  
          })}
        </div>
        <div className="buttons">
          <div className="reroll">
            Don't like the selections?
          </div>
          <div className="divButtonReroll">
            <button className="btnReroll" onClick={handleRandomAgain}>Reroll</button>
          </div>
          <div className="divButtonProceed">
            <button className="btnProceed" onClick={gotoScoreboard}>Scoreboard</button>
          </div>
        </div>
    </div>
  )
}

export default Randomizer