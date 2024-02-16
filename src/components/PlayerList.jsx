import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

function PlayerList({ searchText }) {
  const [players, setPlayers] = useState([]);
  const [filteredPlayers, setFilteredPlayers] = useState([]);
  const cohortName = '2308-ACC-ET-WEB-PT-B';
  const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players`;

  useEffect(() => {
    // Fetch players from the API
    fetchPlayers();
  }, []);

  const fetchPlayers = async () => {
    try {
      const response = await fetch(APIURL);
      const data = await response.json();
      setPlayers(data.data.players);
    } catch (error) {
      console.error('Error fetching players:', error);
    }
  };

  // Function to filter players based on search text
  const handleSearch = (searchText) => {
    if (searchText.trim() === '') {
      setFilteredPlayers(players); // Reset filter if search text is empty
    } else {
      const filtered = players.filter(player => player.name.toLowerCase().includes(searchText.toLowerCase()));
      setFilteredPlayers(filtered);
    }
  };

  useEffect(() => {
    handleSearch(searchText); // Update filtered players when search text changes
  }, [searchText, players]);

  return (
    <div>
      <h1>Puppy Bowl Players</h1>
      <SearchBar onSearch={handleSearch} />
      <ul className='card-container'>
        {filteredPlayers.map(player => (
          <div className='card' key={player.id}>
            {player.imageUrl && <img src={player.imageUrl} alt={player.name} className='card-image' />}
            <div className='card-details'>
              <span>{player.name}</span>
              <Link to={`/players/${player.id}`} className='details-button'>See Details</Link>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default PlayerList;
