import React, { useState, useEffect } from 'react'

const ScorePage = (props) => {

  const [players, setPlayers] = useState(null)
  
  useEffect(() => {
    if (props) {
      setPlayers(props.history.location.state.details.playerObjs)
    }
  }, [props])

  return (
    <div className='playerList row d-flex justify-content-center align-items-center'>
        {
          players && players.map((playerObj, index) => {
          return (
            <div className='playerBlock col-12 d-flex flex-column justify-content-center align-items-center'>
              <h2 key={index}>Player: {playerObj.name}</h2>
              <h2 key={index}>Score: {playerObj.score}</h2>
              <br/>
            </div>
          )
          })
        }
    </div>
  )
}

export default ScorePage