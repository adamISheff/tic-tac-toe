import React from 'react';
import Tile from './Tile.js';
import '../styles/Board.css';

function Board(props) {
  return (
    <div id='board'>
      <div className='row'>
        <Tile id='0' tileClick={props.tileClick} />
        <Tile id='1' tileClick={props.tileClick} />
        <Tile id='2' tileClick={props.tileClick} />
      </div>

      <div className='row'>
        <Tile id='3' tileClick={props.tileClick} />
        <Tile id='4' tileClick={props.tileClick} />
        <Tile id='5' tileClick={props.tileClick} />
      </div>

      <div className='row'>
        <Tile id='6' tileClick={props.tileClick} />
        <Tile id='7' tileClick={props.tileClick} />
        <Tile id='8' tileClick={props.tileClick} />
      </div>
    </div>
  );
}

export default Board;
