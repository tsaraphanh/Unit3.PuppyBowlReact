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
  const handleSearch = (text) => {
    setSearchText(text);
  };

  return (
    <div>
      <div>
        <CreatePlayerForm />
      </div>
      <SearchBar onSearch={handleSearch} />
      <Routes>  
        <Route path="/" element={<PlayerList searchText={searchText} />} /> 
        <Route path='/players/:id' element={<PlayerDetails />} />
      </Routes>
    </div>
  );
}

export default App;
