import React, {Component} from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';

import Header from './components/header/Header.js';


class App extends Component{
  render(){
    return(
      <div className="App">
        <Header />
        {/* <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes> */}
      </div>
    );
  }
}

export default App;