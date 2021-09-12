import React from 'react';
import './../styles/Tile.css';

function Tile(props) {
  return (
    <button className='tile' onClick={props.tileClick} />
  );
}

export default Tile;
