import React from 'react'

const ExampleContainer = (props) => {
  return (
    <div>
      <h2>Example Response:</h2>
       <p>{ JSON.stringify(props.example) }</p>
    </div>
  )
}

export default ExampleContainer