import {useState} from 'react';
import bookBuddyLogo from './assets/BookBuddy.svg';
import './index.css';

export default function App() {
  return (
    <>
      <div className="container">
        <div className="navbar">
          <a href="#">
            <img src={bookBuddyLogo} alt="logo" id="logo" />
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
