import React from 'react';
import Tile from './Tile.js';
import '../styles/Board.css';

function Board(props) {
  return (
    <div id='board'>
      <div className='row'>
        <Tile tileClick={props.tileClick} />
        <Tile tileClick={props.tileClick} />
        <Tile tileClick={props.tileClick} />
      </div>

      <div className='row'>
        <Tile tileClick={props.tileClick} />
        <Tile tileClick={props.tileClick} />
        <Tile tileClick={props.tileClick} />
      </div>

      <div className='row'>
        <Tile tileClick={props.tileClick} />
        <Tile tileClick={props.tileClick} />
        <Tile tileClick={props.tileClick} />
      </div>
    </div>
  );
}

export default Board;
