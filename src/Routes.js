import React from 'react'
import {Switch, Route} from 'react-router-dom'
import StartPage from './Components/StartPage.js'
import ScorePage from './Components/ScorePage.js'
import About from './Components/About.js'

export default (
  <Switch>
    <Route exact path = '/' component = {StartPage}/>
    <Route path = '/scorepage' component = {ScorePage}/>
    <Route path = '/about' component = {About}/>
  </Switch>
)