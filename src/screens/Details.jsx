import {useState} from 'react'


function Details() {

    const [game, setGame] = useState(0)
    const [p1, setP1] = useState('')
    const [p2, setP2] = useState('')
    const [p3, setP3] = useState('')
    const [p4, setP4] = useState('')
    const [randomize, setRandomize] = useState('')


    const updateName = e => {
        switch(e.target.id) {
            case 'player1':
                setP1(e.target.value)
                break;
            case 'player2':
                setP2(e.target.value)
                break;
            case 'player3':
                setP3(e.target.value)
                break;
            case 'player4':
                setP4(e.target.value)
                break;
            default: break;
        }
    }

    const handleGame = e => {
        if (e.target.id === "1" || e.target.id === "gwt-div" || e.target.id === "gwta-text") {
            setGame(1);
        }
        if (e.target.id === "2" || e.target.id === "gwta-div" || e.target.id === "gwta-text") {
            setGame(2);
        }
        console.log(e.target)
    }

    const toggleRandom = () => {
        setRandomize(!randomize)
    }

    const handlePlay = () => {
        if (randomize) {

        }
    }

  return (
    <div className="gameForm">
        <div className="games">
            <div className="whichGame">Which version are you playing?</div>
            <div className="gamesBoxes">
                <div className={game !== 1 ? "gwt game" : "gwt game selected"} id="gwt-div" onClick={handleGame}>
                    <button className="btnGame" id="gwt" onClick={handleGame}><img src={require('../images/boxes/GWT-2E.jpg')} id="1" className="coverImage" alt="Great Western Trail 2nd Edition" /></button><br />
                    <div className="gameName" id="gwt-text" onClick={handleGame}>2nd Edition</div>
                </div>
                <div className={game !== 2 ? "gwt game" : "gwt game selected"} id="gwta-div" onClick={handleGame}>
                    <button className="btnGame" id="gwta" onClick={handleGame}><img src={require('../images/boxes/GWT-A.jpg')} id="2" className="coverImage" alt="Great Western Trail: Argentina" /></button><br />
                    <div className="gameName" id="gwta-text" onClick={handleGame}>Argentina</div>
                </div>
                <div className="gwtnz game">
                    <img src={require('../images/boxes/GWT-NZ.jpg')} className="coverImageDisabled" alt="Great Western Trail: New Zealand" /><br />
                    <div className="gameName">New Zealand</div>
                </div>
            </div>
        </div>
        <div className="names">
            <div class="namesHeader">Enter all player names:</div>
            <div className="inputs">
                <input type="text" className="nameInput" name="player1" id="player1" value={p1} onChange={updateName}/>
                <input type="text" className="nameInput" name="player2" id="player2" value={p2} onChange={updateName}/>
                <input type="text" className="nameInput" name="player3" id="player3" value={p3} onChange={updateName}/>
                <input type="text" className="nameInput" name="player4" id="player4" value={p4} onChange={updateName}/>
            </div>
        </div>
        <div className="randomize">
            <input type="checkbox" className="randomizeCheck" name="random" id="random" onClick={toggleRandom} />
            <label for="random" className="randomizeLabel">Randomize building orders & player sides</label>
        </div>
        <button class="btnPlay" onClick={handlePlay}>Play game</button>
    </div>
  )
}

export default Details