import React from 'react'

const PlayerCard = (props) => {

    const {player, index} = props

    return (
    <div className='playerList row d-flex justify-content-center align-items-center'>
            <div key={index} className='playerBlock col-12 d-flex flex-column justify-content-center align-items-center'>
              <h2>Player: {player.name}</h2>
              <h2>Score: {player.score}</h2>
              <br/>
            </div>
    </div>
    )
}

export default PlayerCard