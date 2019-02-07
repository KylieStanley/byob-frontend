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

  changeDrawerDisplayState = (e) => {
    e.preventDefault()
    this.setState({ showDrawer: !this.state.showDrawer }, () => {
      if (this.state.showDrawer) {
        document.body.style.overflow = 'scroll' 
      } else {
        document.body.style.overflow = 'hidden' 
      }
    })
  }

  render() {
    const { showDrawer } = this.state
    return (
      <div className={ `drawer ${showDrawer ? "drawer-view": "drawer-hide"}` }>
        <div className="tab-container">
          <div className={ `mock-sidebar ${showDrawer ? "mock-sidebar-view": "mock-sidebar-hide"}` } />
          <div className={ `tab ${showDrawer ? "tab-view": "tab-hide"}` }>
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

