import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>BYOB FrontEnd</h1>
        </header>
        <div className="main">
          <nav>
            <h4>Table of Contents</h4>
            <a href="">endpoint</a>
            <a href="">endpoint</a>
            <a href="">endpoint</a>
            <a href="">endpoint</a>
            <a href="">endpoint</a>
          </nav>
          <main>
            <p>Are you building a tourism, vacation or music events/performances app?
             This API allows you to find data on all major 2019 music festivals 
             happening in over 20 states. Data is stored with a PostgresSQL database 
             and the backend is built with Node.js, Express and Knex.js.</p>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
