import React, { useState, useEffect } from 'react'
import PlayerCard from './PlayerCard.js'

const ScorePage = (props) => {

  const [players, setPlayers] = useState(null)

/**FOR DEV ONLY**/
// const [players, setPlayers] = useState([
//     {name: 'Jordan',
//      score: 0
//   },
//     {name: 'Nate',
//      score: 0
//   },
//     {name: 'Chloe',
//      score: 0
//   },
//     {name: 'Brittani',
//      score: 0
//   },
//   {
//     name: 'Spencer',
//     score: 0
//   }
// ])
  
  useEffect(() => {
    if (props) {
      setPlayers(props.history.location.state.details.playerObjs)
    } 
  }, [props])

  const addScore = (playerScore, index) => {
    console.log(typeof playerScore, playerScore)
    // given an index number and array, update the score property inside the element at the given index of the array with the playerScore int
    let tempState = players
    tempState[index].score += playerScore
    console.log(tempState)
    setPlayers(tempState)
  }

  const findWinner = () => {
    console.log('You want to find the winner?')
  }

  const resetGame = () => {
    console.log('you want to reset the game?')
  }



  return (
    <>
    <div className='buttonRow row w-100 mr-0 ml-0 p-3 d-flex justify-content-between align-items-center'>
      <button className='bttn' onClick={findWinner}>Find Winner</button>
      <button className='bttn' onClick={resetGame}>Reset Game</button>
    </div>
    <div className='row w-100 d-flex flex-column justify-content-center align-items-center mr-0 ml-r'>
      {props.history.location.state.details.playerObjs.map((player, index) => {
       return (
       <PlayerCard
          player = {player.name}
          score = {player.score}
          index = {index}
          addScore = {addScore}
        />
        )
      })}
    </div>
    </>
  )
}

export default ScorePage