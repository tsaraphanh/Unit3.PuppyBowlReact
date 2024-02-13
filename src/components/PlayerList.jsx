import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function PlayerList() {
  const [players, setPlayers] = useState([]);
  const cohortName = '2308-ACC-ET-WEB-PT-B'
  const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`

  useEffect(() => {
    // Fetch players from the API
    fetchPlayers();
  }, []);

  const fetchPlayers = async () => {
    try {
      const response = await fetch(APIURL + 'players');
      const data = await response.json();
      console.log(APIURL + 'players')
      setPlayers(data.data.players);
    } catch (error) {
      console.error('Error fetching players:', error);
    }
  };

  return (
    <div>
      <h1>Player List</h1>
      <ul>
        {players.map(player => (
          <li key={player.id}>
            {player.imageUrl && <img src={player.imageUrl} alt={player.name} style={{ width: '100px', height: '100px', marginRight: '10px' }} />}
            <span>{player.name}</span>
            <Link to={`/players/${player.id}`} style={{ marginLeft: '10px' }}>See Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlayerList;
