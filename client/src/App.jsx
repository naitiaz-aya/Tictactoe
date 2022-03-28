import React, { useState } from 'react';
import './App.css';
import CreateGame from './components/CreateGame';
import JoinGame from './components/JoinGame';
import Game from './pages/Game';

const App = () => {
  const [showGame, setShowGame] = useState(false);
  const [name, setName] = useState('');
  const [gameId, setGameId] = useState('');

  const onFormSubmit = (name, gameId = '') => {
    setName(name);
    setGameId(gameId);
    setShowGame(true);
  };

  return (
    <div className="container">
      <h1>Multiplayer X-O</h1>
      {!showGame && (
        <>
          <CreateGame onFormSubmit={onFormSubmit} />
          <h4> Or if you want join your friend room </h4>
          <JoinGame onFormSubmit={onFormSubmit} />
        </>
      )}

      {showGame && <Game name={name} gameId={gameId} />}
    </div>
  );
};

export default App;
