import React from 'react';
import { player1Won, player2Won, draw } from '../State.js';
import '../styles/Header.css';

function Header(props) {
  let message = `${(props.playerTurn === 0) ? props.player1.name : props.player2.name}'s Turn`;
  if (props.gameStatus === player1Won) message = `${props.player1.name} won!`;
  if (props.gameStatus === player2Won) message = `${props.player1.name} won!`;
  if (props.gameStatus === draw) message = `Draw!`;

  return (
    <div>
      <header>
        <p className={'player' + ((props.playerTurn) ? ' current' : '')}>{props.player1}</p>
        <h1 className='logo'>Tic Tac Toe</h1>
        <p className={'player' + (!props.playerTurn) ? ' current' : ''}>{props.player2}</p>
      </header>

      <div id='scoreboard'>
        <div><p>{props.player1NumWin}</p></div>
        <p>{message}</p>
        <div><p>{props.player2NumWin}</p></div>
      </div>
    </div>
  );
}

export default Header;
