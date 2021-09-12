import React, { useState } from 'react';
import Header from './Header.js';
import Board from './Board.js';
import EndGame from './EndGame.js';
import ResetButton from './ResetButton.js';
import Footer from './Footer.js';
import { playing, player1Won, player2Won, draw } from '../State.js';
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

    /* 
      event.target is of type HTMLElement, not ReactElement, so it is a DOM element
      and does not have access to the ReactElement properties. We are forced to
      pollute the global id namespace and force engine to run additional code if
      we want to use event.target.id and events instead of partially invoked functions.
    */
    const index = parseInt(event.target.id);

    // if tile has already been clicked, exit
    if (board[index] !== null) return;
    // Update board
    const newBoard = board.slice();
    newBoard[index] = playerTurn;
    setBoard(newBoard);
    // Check gameStatus
    setGameStatus(checkGameStatus(newBoard, playerTurn));
    // Update playerTurn
    setPlayerTurn(playerTurn === 0 ? 1 : 0);
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

function checkGameStatus(board, playerTurn) {
  // check if a player has won
  for (let i = 0; i < 3; i++) {
    if ((board[3 * i] !== null && board[3 * i] === board[3 * i + 1] && board[3 * i + 1] === board[3 * i + 2])
      || (board[0 + i] !== null && board[0 + i] === board[3 + i] && board[3 + i] === board[6 + i])) {
      console.log(i);
      return playerTurn === 0 ? player1Won : player2Won;
    }
  }
  if ((board[0] !== null && board[0] === board[4] && board[4] === board[8])
    || (board[2] !== null && board[2] === board[4] && board[4] === board[6])) {
    return playerTurn === 0 ? player1Won : player2Won;
  }
  // check if game is a draw
  if (!board.some(element => element === null)) return draw;
  return playing;
}

export default Game;
