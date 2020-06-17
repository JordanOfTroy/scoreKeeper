import React, { useState } from 'react'
import '../styles/startPage.css'
import axios from 'axios'
import { withRouter } from 'react-router-dom';

const StartPage = ({ history }) => {
  const [teamList, setTeamList] = useState('')

  const letsPlay = () => {
    const teams = document.getElementById('teams').value
    axios.post('/api/test', {teamList: teamList}).then((res) => {
      console.log('respons test:', res.data)
      history.push('/scorepage')
    })
    
  }

  const handleChange = (e) => {
    setTeamList(e.target.value)
  }

  return (
    <div className="row p-5 main_card_bg">
      <div className="col-sm-12 h-100 main_card">
        <h1>Please enter Player/Team names:</h1>
        <h3>(separate names with a comma)</h3>
          <textarea name="teams" id="teams" cols="30" rows="10" value={teamList} onChange={(e)=>handleChange(e)}></textarea>
          <button 
          className="bttn" 
          type='submit' 
          value='submit'
          onClick={letsPlay}
          >Lets Play!</button>
      </div>
    </div>
  )
}

export default withRouter(StartPage)