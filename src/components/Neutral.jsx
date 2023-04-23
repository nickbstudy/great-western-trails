import React from 'react'

function Neutral({letter}) {
  return (
    <div className="randomizerPage">
        <div className="grayBackground">
            <div className="wrapper">
            <div className="inverted-corner">
                <div className="top">&nbsp; </div>
                    <h1 className="displayed">{letter}</h1>
                <div className="bottom"> </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Neutral