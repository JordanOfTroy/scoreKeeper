import React from 'react';
import logo from './logo.svg';
import './styles/main.css';
import {HashRouter} from 'react-router-dom'
import router from './Routes'
import Header from './Components/Header.js'
import Footer from './Components/Footer.js'


function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header/>
        {router}
        <Footer/>
      </div>
    </HashRouter>
  );
}

export default App;
