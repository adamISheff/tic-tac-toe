import React from 'react';
import { player1Won, player2Won } from '../State.js';
import './EndGame.js';

function EndGame(props) {

  let imgSrc = './assets/draw1.gif';
  let imgAlt = 'tic-tac-toe in draw condition';

  if (props.gameStatus === player1Won) {
    imgSrc = props.player1.logo;
    // TODO imgAlt
  } else if (props.gameStatus === player2Won) {
    imgSrc = props.player2.logo;
    // TODO imgAlt
  }

  return (
    <div id='end-game'>
      <img src={imgSrc} alt={imgAlt}></img>
    </div>
  );
}

export default EndGame;
