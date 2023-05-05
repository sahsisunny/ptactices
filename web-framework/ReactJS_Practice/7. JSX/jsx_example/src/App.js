import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      {/* Without JSX */}
      {React.createElement(
        'h1',
        { className: 'head-tag' },
        'Hello JSX'
      )}
    </div>
  );
}

export default App;
