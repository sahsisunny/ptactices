import logo from './logo.svg';
import './App.css';
import Profile from './profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Profile text ="Function Profile COmponent" />
      </header>
    </div>
  );
}

export default App;
