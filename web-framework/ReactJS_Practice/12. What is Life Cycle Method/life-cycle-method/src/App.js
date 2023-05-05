import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super();
    console.log('constructor');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  render() {
    return (
      <div>
        <h1>Life Cycle Method </h1>
      </div>
    );
  }
}