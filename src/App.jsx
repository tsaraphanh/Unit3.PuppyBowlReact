import React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import PlayerList from './components/PlayerList';
import PlayerDetails from './components/PlayerDetails';
import CreatePlayerForm from './components/CreatePlayerForm';
import SearchBar from './components/SearchBar';
import './App.css';



function App() {
  const [searchText, setSearchText] = useState('');
  const [showCreatePlayerForm, setShowCreatePlayerForm] = useState(false);

  const handleSearch = (text) => {
    setSearchText(text);
  };

  const toggleCreatePlayerForm = () => {
    setShowCreatePlayerForm(!showCreatePlayerForm);
  };

  return (
    <div>
      <div className="header">
        <button className="create-player-button" onClick={toggleCreatePlayerForm}>Create Player</button>
        {showCreatePlayerForm && <CreatePlayerForm />}
        <div className="search-container">
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>
      <Routes>  
        <Route path="/" element={<PlayerList searchText={searchText} />} /> 
        <Route path='/players/:id' element={<PlayerDetails />} />
      </Routes>
    </div>
  );
}

export default App;
