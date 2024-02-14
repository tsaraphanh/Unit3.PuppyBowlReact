import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PlayerList from './components/PlayerList';
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={PlayerList} />  
      </Routes>
    </div>
  );
}

export default App;
