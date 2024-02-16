import React, { useState } from 'react';

function CreatePlayerForm() {
  const [name, setName] = useState('');
  const [team, setTeam] = useState('');
  const [breed, setBreed] = useState('');
  const [status, setStatus] = useState('bench');
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

  const cohortName = '2308-ACC-ET-WEB-PT-B';

    // Create player object with updated properties
  const newPlayer = {
      name: name,
      breed: breed,
      status: status,
      imageUrl: imageUrl,
      teamId: parseInt(team)
  };

  try {
     
    const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPlayer)
    });

    if (!response.ok) {
        throw new Error('Failed to create player');
    }
     
      setName('');
      setTeam('');
      setBreed('');
      setStatus('bench');
      setImageUrl('');
      setError('');
      alert('Player created successfully!');
      window.location.reload();
    } catch (error) {
      setError('Failed to create player');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create New Player</h2>
      {error && <p className="error">{error}</p>}
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="breed">Breed:</label>
        <input
          type="text"
          id="breed"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="status">Status:</label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
        >
          <option value="field">Field</option>
          <option value="bench">Bench</option>
        </select>
      </div>
      <div>
        <label htmlFor="imageUrl">Image URL:</label>
        <input
          type="text"
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="team">Team ID (optional):</label>
        <input
          type="number"
          id="team"
          value={team}
          onChange={(e) => setTeam(e.target.value)}
        />
      </div>
      <button type="submit">Create Player</button>
    </form>
  );
}

export default CreatePlayerForm;
