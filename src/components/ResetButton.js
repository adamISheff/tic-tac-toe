import React from 'react';
import './../styles/ResetButton.css';

function ResetButton(props) {
  
  return (
    <button className='reset' onClick={props.reset}>Reset</button>
  );
}

export default ResetButton;
