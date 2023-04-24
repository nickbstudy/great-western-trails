import React from 'react'

function Neutral({letter, space}) {
  return (
    <div className="neutralDetail">
        <div className="spaceForNeutral">
            <span className="spaceLetter">{space}</span>
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
    </div>
  )
}

export default Neutral