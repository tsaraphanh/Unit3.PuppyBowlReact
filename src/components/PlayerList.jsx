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
      <h1>Puppy Bowl Players</h1>
      <ul className='card-container'>
        {players.map(player => (
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
