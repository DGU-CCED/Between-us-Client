import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/header/Header.js';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import Home from './pages/auth/Home';
import HackathonDetail from './components/HackathonDetail';
import Kanban from './components/kanban/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path="/hackathon/detail/:id" element={<HackathonDetail />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/kanban' element={<Kanban />} />
        </Routes>
      </div>
    );
  }
}

export default App;