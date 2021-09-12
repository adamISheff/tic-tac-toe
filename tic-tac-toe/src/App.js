import React, {useState} from 'react';
import Game from './Game.js';
import './styles/App.css';


function App(props) {
  const [player1, setPlayer1] = useState('Adam');
  const [player2, setPlayer2] = useState('Miguel');
  
  return (
    <Game player1={player1} player2={player2} />
  );
}

export default App;
