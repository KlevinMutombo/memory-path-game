// src/Menu.js
import React from 'react';
import './menu.css';

function Menu({ onStart }) {
  return (
    <div className="menu">
      <h1 className="menu-title">PathPlay</h1>

      <div className="menu-content">
        <div className="menu-section">
          <h2>Choose your difficulty.</h2>
          <button className="easy">Easy 😊</button>
          <button className="medium">Medium 😐</button>
          <button className="hard">Hard 😠</button>
        </div>

        <div className="menu-section">
          <h2>Choose your theme.</h2>
          <button className="theme">Numbers 🔢</button>
          <button className="theme">Shapes 🎨</button>
          <button className="theme">Animals 🐾</button>
        </div>

        <div className="menu-section">
          <h2>Start your challenge.</h2>
          <button className="play-btn" onClick={onStart}>Play now!</button>
        </div>
      </div>
    </div>
  );
}

export default Menu;


