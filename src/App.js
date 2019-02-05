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
    
              <h3>States Endpoints</h3>

                <code>GET /api/v1/states</code> 
                <p>--> returns an array of state objects</p>

                <code>POST /api/v1/states</code> 

                <code>GET /api/v1/states:stateID</code> 
                <p>--> returns an array with a specific state</p>

                <code>GET  /api/v1/states?state_id=1</code> 
                <p>--> returns an array with a specific state</p>

                <code>PUT /api/v1/states/:stateID</code>

                <code>DELETE /api/v1/states/:stateID</code>

              <h3>Festivals Endpoints</h3>

                <code>GET /api/v1/festivals</code>
                <p>--> returns an array of festival objects</p>

                <code>POST /api/v1/festivals</code>

                <code>GET /api/v1/states/:stateID/festivals</code>
                <p>--> returns an array of festival objects in a  state</p>

                <code>GET /api/v1/festivals/:festivalID</code>
                <p>--> returns an array with a specific festival </p>

                <code>PUT /api/v1/festivals/:festivalID</code>

                <code>DELETE /api/v1/festivals/:festivalID</code>

          </main>
        </div>
      </div>
    );
  }
}

export default App;
