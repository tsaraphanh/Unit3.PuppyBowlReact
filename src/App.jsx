import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PlayerList from './components/PlayerList';
import PlayerDetails from './components/PlayerDetails';
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={PlayerList} /> 
        <Route path='/players/:id' Component={PlayerDetails}/>
      </Routes>
    </div>
  );
}

export default App;
