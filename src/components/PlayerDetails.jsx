// PlayerDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function PlayerDetails() {
  const [player, setPlayer] = useState(null);
  const { id } = useParams();
  const cohortName = '2308-ACC-ET-WEB-PT-B';
  const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players/${id}`;

  useEffect(() => {
    // Fetch player details from the API
    fetchPlayerDetails();
  }, [id]);

  const fetchPlayerDetails = async () => {
    try {
      const response = await fetch(APIURL);
      const data = await response.json();
      setPlayer(data.data.player);
    } catch (error) {
      console.error('Error fetching player details:', error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(APIURL, {
        method: 'DELETE'
      });
      if (response.ok) {
        history.push('/'); // Redirect to home page after successful deletion
      } else {
        console.error('Failed to delete player');
      }
    } catch (error) {
      console.error('Error deleting player:', error);
    }
  };

  return (
    <div>
      {player ? (
        <div>
          {player.imageUrl && <img src={player.imageUrl} alt={player.name} className='player-details-image' />}
          <h1>{player.name}</h1>
          <p>Breed: {player.breed}</p>
          <p>Status: {player.status}</p>
          <p>Team ID: {player.teamId}</p>
          <p>Cohort ID: {player.cohortId}</p>
          <button className="delete-button" onClick={handleDelete}>Delete Player</button>
          <Link to="/" className="back-button">Go Back Home</Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default PlayerDetails;
