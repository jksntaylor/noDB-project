import React, { Component } from 'react';
import './App.css';
import Todo from './components/todo/todo';
import Clock from './components/clock/clock';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Todo />
        <Clock />
      </div>
    );
  }
}

export default App;
