import React from 'react'

const PlayerCard = (props) => {

    const {player, index} = props

    return (
        <div key={index} className='playerBlock d-flex flex-row w-75 justify-content-between align-items-center mb-3'>
            <h2>{player.name}</h2>
            <h2>{player.score}</h2>
            <input size='2'></input>
            <br/>
        </div>
    )
}

export default PlayerCard