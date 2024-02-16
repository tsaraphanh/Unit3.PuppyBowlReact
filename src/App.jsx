import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PlayerList from './components/PlayerList';
import PlayerDetails from './components/PlayerDetails';
import CreatePlayerForm from './components/CreatePlayerForm';
import './App.css';



function App() {
  return (
    <div>
       <div>
        <CreatePlayerForm />
       </div>
      <Routes>
        
        <Route path="/" Component={PlayerList} /> 
        <Route path='/players/:id' Component={PlayerDetails}/>
      </Routes>
    </div>
  );
}

export default App;
