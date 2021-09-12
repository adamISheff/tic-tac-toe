import React from 'react';
import './../styles/Tile.css';

function Tile(props) {
  return (
    <button id={props.id} className='tile' onClick={props.tileClick} />
  );
}

export default Tile;
