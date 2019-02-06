import React, { Component } from 'react';
import './Drawer.css'
import Form from './Form'
import ExampleContainer from './ExampleContainer'


export default class Drawer extends Component {
  constructor() {
    super()
    this.state = {
      showDrawer: false,
      example: {}
    }
  }

  handleResult = (example) => {
    this.setState({ example })
  }

  changeDrawerDisplayState = (event) => {
    event.preventDefault()
    this.setState({ showDrawer: !this.state.showDrawer })
  }

  changeDrawerClass = () => {
    if (this.state.showDrawer) {
      return "drawer drawer-view"
    } else {
      return "drawer drawer-hide"
    }
  }

  changeMockSideClass = () => {
    if (this.state.showDrawer) {
      return "mock-sidebar mock-sidebar-view"
    } else {
      return "mock-sidebar mock-sidebar-hide"
    }
  }

  changeTabClass = () => {
    if (this.state.showDrawer) {
      return "tab tab-view"
    } else {
      return "tab tab-hide"
    }
  }

  render() {
    return (
      <div className={ this.changeDrawerClass() }>
        <div className="tab-container">
          <div className={ this.changeMockSideClass() }></div>
          <div className={ this.changeTabClass() }>
            <i onClick={ this.changeDrawerDisplayState } className="fas fa-bars drawer-view-btn"></i>
          </div>
        </div>

        <div>
          <Form handleResult={ this.handleResult } />
          <ExampleContainer example={ this.state.example } />
        </div>
      </div>
    )  
  }  
}

