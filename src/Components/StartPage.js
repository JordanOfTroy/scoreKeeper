import React, { useState } from 'react'
import '../styles/startPage.css'
import axios from 'axios'
import { withRouter } from 'react-router-dom';

const StartPage = ({ history }) => {
  const [players, setPlayers] = useState([])

  const letsPlay = () => {
    axios.post('/api/test', {players: players}).then((res) => {
      history.push({
        pathname: '/scorepage',
        state: {details: res.data}
      })
    })
    
  }

  const noWhitespace = (str) => {
    const regexNonWhitespace = /\S/
    if (regexNonWhitespace.test(str)) {
      return true
    } else {
      return false
    }
  }

  const addPlayer = () => { 
    const newPlayer = document.getElementById('newPlayer').value
    if (newPlayer && noWhitespace(newPlayer)) {
      setPlayers(players.concat(newPlayer))
    } else {
      console.log('must enter a name')
    }
    document.getElementById('newPlayer').value = ''
  }

  const deletePlayer = (inx) => {
    setPlayers(players.filter((player, index) => index !== inx))
  }

  return (
    <div className='main_card_bg py-5'>
      <div className="row d-flex flex-row">
        <div className="col-12 mb-3 d-flex align-items-center justify-content-center">
          <input id='newPlayer' placeholder='Enter Name'></input>
        </div>
        <div className="col-6 d-flex align-items-center justify-content-center">
            <button 
            className="bttn" 
            type='submit' 
            value='submit'
            onClick={addPlayer}
            >Add <i class="fas fa-plus"></i></button>
        </div>
        <div className="col-6 d-flex align-items-center justify-content-center">
            <button 
            className="bttn" 
            type='submit' 
            value='submit'
            onClick={letsPlay}
            >Play <i class="fas fa-play"></i></button>
        </div>
      </div>
      <div className='row d-flex justify-content-center align-items-center mt-5'> 
        <div className="col d-flex flex-column justify-content-center align-items-center">
            {
              players.map((playerName, index) => {
              return(
                <div key={index} className='w-75 d-flex justify-content-between align-items-center mb-3'>
                  <h1 className='playerName mb-2'>{playerName}</h1>
                  <i class="far fa-trash-alt" onClick={() => deletePlayer(index)}></i>
                </div>
              )
              })
            }
        </div>
      </div>
   
    </div>
  )
}

export default withRouter(StartPage)