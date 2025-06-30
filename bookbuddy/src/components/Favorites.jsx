import {useState} from 'react';
import bookWormLogo from './assets/BookWorm_light.svg';
import Navbar from './components/Navbar';
import './index.css';

export default function App() {
  return (
    <>
      <div className="container">{Navbar}</div>
    </>
  );
}
