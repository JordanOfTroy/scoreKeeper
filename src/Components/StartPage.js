import React, { useState } from 'react'
import '../styles/startPage.css'

const StartPage = () => {

  const [teamList, setTeamList] = useState([])

  const letsPlay = () => {
    console.log ('you clicked Let\'s play')
    const teams = document.getElementById('teams').value
    console.log('teams:', teams, typeof teams)
    console.log('team list:', teamList, typeof teamList)
    window.history.pushState({},'/scorepage')
    
  }

  const handleChange = (e) => {
    setTeamList(e.target.value)
  }

  return (
    <div className="row p-5 main_card_bg">
      <div className="col-sm-12 h-100 main_card">
        <h1>Please enter Player/Team names:</h1>
        <h3>(separate names with a comma)</h3>
        <form onSubmit={()=>letsPlay()}>
          <textarea name="teams" id="teams" cols="30" rows="10" value={teamList} onChange={(e)=>handleChange(e)}></textarea>
          <button className="bttn" type='submit' value='submit'>Lets Play!</button>
        </form>
      </div>
    </div>
  )
}

export default StartPage