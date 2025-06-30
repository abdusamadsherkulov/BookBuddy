import {Link} from 'react-router-dom';
import bookWormLogo from '../assets/BookWorm_light.svg';

export default function Navbar() {
  return (
    <div className="navbar">
      <a href="#">
        <img src={bookWormLogo} alt="logo" id="logo" />
      </a>
      <div className="nav-menu">
        <ul>
          <li>
            <a href="App.jsx">Home</a>
          </li>
          <li>
            <a href="AddBook.jsx">Add Book</a>
          </li>
          <li>
            <a href="Favorites.jsx">Favorites</a>
          </li>
          <li>
            <a href="Quotes.jsx">Quotes</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
