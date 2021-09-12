import React, { useState } from 'react';
import Game from './Game.js';
import '../styles/App.css';


function App(props) {
  // eslint-disable-next-line
  const [player1, setPlayer1] = useState({ name: 'Adam', logo: './assets/draw1.gif' });
  // eslint-disable-next-line
  const [player2, setPlayer2] = useState({ name: 'Miguel', logo: './assets/draw1.gif' });

  return (
    <Game player1={player1} player2={player2} />
  );
}

export default App;
