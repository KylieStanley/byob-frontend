import React, { Component } from 'react';
import './Drawer.css'
import Form from './Form'
import ExampleContainer from './ExampleContainer'

class Drawer extends Component {
  constructor() {
    super()
    this.state = {
      showDrawer: false
    }
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

  render() {
    return (
      <div className={ this.changeDrawerClass() }>
        <div className="tab-container">
          <div className="mock-side"></div>
          <div className="tab">
            <i onClick={ this.changeDrawerDisplayState } className="fas fa-bars"></i>
          </div>
        </div>

        <div>
          <Form />
          <ExampleContainer />
        </div>
      </div>
    )    
  }
}

export default Drawer
