import React from 'react'
import './ExampleContainer.css'


const ExampleContainer = (props) => {
  return (
    <div className="example-container">
      {
        Object.keys(props.example).length > 0 ?
          <div>
            <h2>Example Response:</h2>
            <pre><code>{ JSON.stringify(props.example, null, ' ') }</code></pre>
          </div>
        : 
          <h2>Select an example response above</h2>
      }
    </div>
  )
}

export default ExampleContainer