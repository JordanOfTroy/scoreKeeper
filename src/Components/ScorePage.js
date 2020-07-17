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
    if (props.history.location.state) {
      setPlayers(props.history.location.state.details.playerObjs);
    };
  }, [props]);

  const addScores = () => {
    const playerScores = [];
    const playerBlocks = document.getElementsByClassName('playerBlock');
    for (let i = 0; i < playerBlocks.length; i++) {
      const newScore = Number(playerBlocks[i].children[1].innerHTML) + Number(playerBlocks[i].children[2].value);
      const player = {
        name: playerBlocks[i].children[0].innerHTML,
        score: newScore
      };
      playerBlocks[i].children[2].value = '';
      playerScores.push(player);
    }
    setPlayers(playerScores);
  };

  const findWinner = () => {
    console.log('You want to find the winner?');
  };

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
            key = {index}
            player = {player.name}
            score = {player.score}
          />
          )
        })}
    </div>
    </>
  )
}

export default ScorePage