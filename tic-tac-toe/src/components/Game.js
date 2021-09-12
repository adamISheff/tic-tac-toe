import React, { useState } from 'react';
import Header from './Header.js';
import Board from './Board.js';
import EndGame from './EndGame.js';
import ResetButton from './ResetButton.js';
import Footer from './Footer.js';
import '../styles/Game.css';

const DEFAULT_BOARD = ['', '', '', '', '', '', '', '', ''];

function Game(props) {
  const [player1NumWin, setPlayer1NumWin] = useState(0);
  const [player2NumWin, setPlayer2NumWin] = useState(0);
  const [board, setBoard] = useState(DEFAULT_BOARD);
  const [playerTurn, setPlayerTurn] = useState(0);
  const [gameStatus, setGameStatus] = useState(Game.playing);

  function reset() {
    // TODO
    console.log('reset');
  }

  function tileClick(tileIndex) {
    // TODO
    console.log('tileClick ' + tileIndex);
  }

  return (
    <div>
      <Header
        player1={props.player1}
        player2={props.player2}
        player1NumWin={player1NumWin}
        player2NumWin={player2NumWin}
        playerTurn={playerTurn}
        gameStatus={gameStatus}
      />
      {gameStatus === Game.playing && <Board board={board} tileClick={tileClick} />}
      {gameStatus !== Game.playing && <EndGame gameStatus={gameStatus} player1={props.player1} player2={props.player2} />}
      <ResetButton reset={reset} />
      <Footer />
    </div>
  );
}

export default Game;
