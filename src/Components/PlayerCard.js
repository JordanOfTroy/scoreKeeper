import React, {useState, useEffect}from 'react'

const PlayerCard = (props) => {

    // const [playerScore, setPlayerScore] = useState(0)

    const {player, score} = props

    // const handleNewScore = (e) => {
    //     console.log(e.target.value)
    //     setPlayerScore(Number(e.target.value))
    // }


    useEffect(() => {
       
    }, [score])

    return (
        <div className='playerBlock d-flex flex-row w-75 justify-content-between align-items-center mb-3'>
            <h2>{player}</h2>
            <h2>{score}</h2>
            <input size='2' name='scoreInput' type='number'></input>
            {/* <input size='2' name='scoreInput' type='number' onChange={handleNewScore}></input> */}
            {/* <button className='bttn' onClick={() => addScore(playerScore, index)}>Add Scores</button> */}
            <br/>
        </div>
    )
}

export default PlayerCard