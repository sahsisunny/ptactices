import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true
    }
  }
  render() {
    return (
      <div>
        {
          this.state.show ? <h1>Hello World</h1> : null
        }
        <button onClick={() => { this.setState({ show: false }) }}>Hide</button>
        <button onClick={() => { this.setState({ show: true }) }}>Show</button>
        <button onClick={() => { this.setState({ show: !this.state.show }) }}>Toggle</button>
      </div >
    );
  }
}

export default App;
