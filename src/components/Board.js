import React from 'react';
import Tile from './Tile.js';
import '../styles/Board.css';

function Board(props) {
  return (
    <div id='board'>
      <div className='row'>
        <Tile tileNum='0' tileClick={props.tileClick} />
        <Tile tileNum='1' tileClick={props.tileClick} />
        <Tile tileNum='2' tileClick={props.tileClick} />
      </div>

      <div className='row'>
        <Tile tileNum='3' tileClick={props.tileClick} />
        <Tile tileNum='4' tileClick={props.tileClick} />
        <Tile tileNum='5' tileClick={props.tileClick} />
      </div>

      <div className='row'>
        <Tile tileNum='6' tileClick={props.tileClick} />
        <Tile tileNum='7' tileClick={props.tileClick} />
        <Tile tileNum='8' tileClick={props.tileClick} />
      </div>
    </div>
  );
}

export default Board;
