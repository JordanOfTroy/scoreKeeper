import React, { useState, useEffect } from 'react'
import PlayerCard from './PlayerCard.js'

const ScorePage = (props) => {

  const [players, setPlayers] = useState(null)

/**FOR DEV ONLY**/
//   const [players, setPlayers] = useState([
//     {name: 'Test 1',
//      score: 0
//   },
//     {name: 'Test 2',
//      score: 0
//   },
//     {name: 'Test 3',
//      score: 0
//   },
//     {name: 'Test 4',
//      score: 0
//   }
// ])
  
  useEffect(() => {
    if (props) {
      setPlayers(props.history.location.state.details.playerObjs)
    } 
  }, [props])

  return (
    players && players.map((player, index) => {
     return (
     <PlayerCard
        player = {player}
        index = {index}
      />
      )
    })
  )
}

export default ScorePage