import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setNeutrals, setPlayerBuildings, players, game  } from '../features/game/gameSlice'
import Neutral from '../components/Neutral'

function Randomizer() {

  // This is what should actually happen, using fake state for building.
  // const greyTiles = useSelector((state) => state.game.neutrals)
  // const playerTiles = useSelector((state) => state.game.playerBuildings)

  // ------- remove later, this is for building only ---------
    // Test values for GWT (7 grey 12 player)
    const greyTiles = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
    const playerTiles = ['A', 'B', 'A', 'B', 'A', 'B', 'A', 'B', 'B', 'A', 'B', 'A']

    /* Alt values for GWT: A (8 grey 10 player)
    const greyTiles = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    const playerTiles = ['A', 'B', 'A', 'B', 'A', 'B', 'A', 'B', 'B', 'A']
    */
  // ----------------- remove above --------------------------



  return (
    <>
    <div className='gameForm'>
      <div style={{padding: '20px', fontSize: '2rem', fontWeight: 600}}>Randomizer</div>
        <div className="neutralOrder">
          {greyTiles.map((tile, index) => {
            return (
              <Neutral letter={tile} key={index} />
            )
          })}
        </div>
    </div>
    </>
  )
}

export default Randomizer