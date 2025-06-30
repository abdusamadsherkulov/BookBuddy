import {useState} from 'react';
import bookWormLogo from './assets/BookWorm_light.svg';
import './index.css';

export default function App() {
  return (
    <>
      <div className="container">
        <div className="navbar">
          <a href="#">
            <img src={bookWormLogo} alt="logo" id="logo" />
          </a>
          <div className="nav-menu">
            <ul>
              <li>Home</li>
              <li>Add Book</li>
              <li>Favorites</li>
              <li>Quotes</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
