import React from 'react';
import './styleFooter.css';

function Footer(props) {
  return (
    <footer className="Footer-Container">
      <img className="Footer-Image"
      src="https://www.pngarts.com/files/1/Zen-PNG-Download-Image.png"
      alt="Zen Rocks"
      />
      <p className="Footer-text">May 25, 2020</p>
      {/* <a> */}
        <img className="Footer-Image-Two"
      src="https://i.dlpng.com/static/png/6332298_preview.png"
      alt="Social Media"
      />
      {/* </a> */}
    </footer>
  )
}

export default Footer
