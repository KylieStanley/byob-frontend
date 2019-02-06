import React from 'react'
import './ExampleContainer.css'


const ExampleContainer = (props) => {
  return (
    <div className="example-container">
      <h2>Example Response:</h2>
       <pre><code>{ JSON.stringify(props.example, null, ' ') }</code></pre>
    </div>
  )
}

export default ExampleContainer