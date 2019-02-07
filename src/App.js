import React, { Component } from 'react';
import './App.css';
import Drawer from './Drawer'

class App extends Component {

  scrollToElement = (e) => {
    e.preventDefault()

    const topPos = this.refs[e.target.id].offsetTop;
    this.refs.mainContent.scrollTop = topPos-10;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>States & Festivals API Documentation</h1>
        </header>
        <div className="main-grid">
          <nav className="sidebar-nav">
            <h4>Table of Contents</h4>
            <button className='sidebar-links' id='top' onClick={this.scrollToElement}>top of page</button>
            <button className='sidebar-links' id='states' onClick={this.scrollToElement}>States Endpoints</button>
            <button className='sidebar-links' id='festivals' onClick={this.scrollToElement}>Fesitvals Endpoints</button>
          </nav>
          <main ref='mainContent' className="main-content">
            <p ref='top'>Are you building a tourism, vacation or music events/performances app?
             This API allows you to find data on all major 2019 music festivals 
             happening in over 20 states. Data is stored with a PostgresSQL database 
             and the backend is built with Node.js, Express and Knex.js.</p>
    
              <h3 ref='states'>States Endpoints</h3>

                <code>GET /api/v1/states</code> 
                <p>--> returns an array of state objects</p>

                <code>POST /api/v1/states</code> 

                <code>GET /api/v1/states:stateID</code> 
                <p>--> returns an array with a specific state</p>

                <code>GET  /api/v1/states?state_id=1</code> 
                <p>--> returns an array with a specific state</p>

                <code>PUT /api/v1/states/:stateID</code>

                <code>DELETE /api/v1/states/:stateID</code>

              <h3 ref='festivals'>Festivals Endpoints</h3>

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
        <Drawer />
      </div>
    );
  }
}

export default App;
