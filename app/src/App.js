import './App.css';
import React from 'react';
import Heder from './components/Heder/Heder';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <div className="navBar">
        <NavBar />
      </div>
      <Heder />
    </div>
  );
}

export default App;
