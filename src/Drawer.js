import React from 'react';
import './Drawer.css'
import Form from './Form'
import ExampleContainer from './ExampleContainer'

const Drawer = () => {
  return (
  <div className="drawer">
    <div className="tab-container">
      <div className="mock-side"></div>
      <div className="tab">
        <i class="fas fa-bars"></i>
      </div>
    </div>

    <div>
      <Form />
      <ExampleContainer />
    </div>

  </div>
  )
}

export default Drawer
