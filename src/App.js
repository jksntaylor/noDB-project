import React, { Component } from 'react';
import './App.css';
import Todo from './components/todo/todo';
import Clock from './components/clock/clock';
import News from './components/news/news';
import Weather from './components/weather/weather';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className='clock-weather'>
            <Clock />
            <Weather />
          </div>
          <div className='app-parts'>
            <News />
            <Todo />
          </div>
      </div>
    );
  } 
}

export default App;
