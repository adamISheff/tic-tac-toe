import React, { useState } from 'react';
import { render } from 'react-dom';
import './styles/Header.js';


function Header(props) {



  return (
    <div>
      <header>
        <p className={ 'player' + ((props.playerTurn)? ' current': '')}>{props.player1}</p>
        <h1 className='logo'>Tic Tac Toe</h1>
        <p className={ 'player' + (!props.playerTurn)? ' current': ''}>{props.player2}</p>
      </header>
      
      <div id='scoreboard'>
        <div><p>{props.player1NumWin}</p></div>
        <p>{(props.playerTurn === 0) ? props.player1 : props.player2}'s Turn</p>
        <div><p>{props.player2NumWin}</p></div>
      </div>
    </div>
  );

}

export default Header;