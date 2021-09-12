import React, { useState } from 'react';
import Header from './Header.js';
import Board from './Board.js';
import EndGame from './EndGame.js';
import ResetButton from './ResetButton.js';
import Footer from './Footer.js';
import { playing } from '../State.js';
import '../styles/Game.css';

const DEFAULT_BOARD = [null, null, null, null, null, null, null, null, null];

function Game(props) {
  // eslint-disable-next-line
  const [player1NumWin, setPlayer1NumWin] = useState(0);
  // eslint-disable-next-line
  const [player2NumWin, setPlayer2NumWin] = useState(0);
  // eslint-disable-next-line
  const [board, setBoard] = useState(DEFAULT_BOARD);
  // eslint-disable-next-line
  const [playerTurn, setPlayerTurn] = useState(0);
  const [gameStatus, setGameStatus] = useState(playing);
  const [firstMovePlayer, setFirstMovePlayer] = useState(0);

  function reset() {
    // reset board
    setBoard(DEFAULT_BOARD);
    // reset state to playing
    setGameStatus(playing);
    // reset player turn
    const nextFirstMovePlayer = firstMovePlayer === 0 ? 1 : 0;
    setPlayerTurn(nextFirstMovePlayer);
    setFirstMovePlayer(nextFirstMovePlayer);
  }

  function tileClick(event) {
    // determine tile index
    const index = event.target;
    // if tile has already been clicked, exit
    // Update board
    // Update playerTurn
    // Check gameStatus

    console.log({index});
  }

  return (
    <div id='game'>
      <Header
        player1={props.player1}
        player2={props.player2}
        player1NumWin={player1NumWin}
        player2NumWin={player2NumWin}
        playerTurn={playerTurn}
        gameStatus={gameStatus}
      />
      {gameStatus === playing && <Board board={board} tileClick={tileClick} />}
      {gameStatus !== playing && <EndGame gameStatus={gameStatus} player1={props.player1} player2={props.player2} />}
      <ResetButton reset={reset} />
      <Footer />
    </div>
  );
}

export default Game;
