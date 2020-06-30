import React, { useState, useEffect } from 'react'
import PlayerCard from './PlayerCard.js'

const ScorePage = (props) => {

  // const [players, setPlayers] = useState(null)

/**FOR DEV ONLY**/
const [players, setPlayers] = useState([
    {name: 'Test 1',
     score: 0
  },
    {name: 'Test 2',
     score: 0
  },
    {name: 'Test 3',
     score: 0
  },
    {name: 'Test 4',
     score: 0
  }
])
  
  // useEffect(() => {
  //   if (props) {
  //     setPlayers(props.history.location.state.details.playerObjs)
  //   } 
  // }, [props])

  const addScores = () => {
    console.log('You want to add the scores for this round?')
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
      <button className='bttn' onClick={addScores}>Add Scores</button>
      <button className='bttn' onClick={findWinner}>Find Winner</button>
      <button className='bttn' onClick={resetGame}>Reset Game</button>
    </div>
    <div className='row w-100 d-flex flex-column justify-content-center align-items-center mr-0 ml-r'>
      {players && players.map((player, index) => {
       return (
       <PlayerCard
          player = {player}
          index = {index}
        />
        )
      })}
    </div>
    </>
  )
}

export default ScorePage