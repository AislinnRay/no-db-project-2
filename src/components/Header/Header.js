import React from 'react';
import './styleHeader.css';

function Header(props) {
  return (
    <header className="Header-Container">
      <img className="Branch"
      src="https://purepng.com/public/uploads/medium/purepng.com-bonsai-treenaturebonsaitree-961524678706ognmg.png"
      // "https://cdn.pixabay.com/photo/2018/04/13/16/25/prunus-3316961_960_720.png"
      alt="flowers"
      />
      <h1>To-do List</h1>
    </header>
  )
}

export default Header