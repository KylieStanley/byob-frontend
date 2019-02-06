import React, { Component } from 'react'

export default class Form extends Component {
  constructor() {
    super()
    this.state = {
      method: 'GET',
      path: '/api/v1/states',
      databaseObj: {},
      idRequired: false
    }
  }

  submitRequest = (e) => {
    console.log('request')
    e.preventDefault()

    const url = `https://byob-us-music-festivals.herokuapp.com${this.state.path}`

    if (url.includes('states')) {
      this.setState({
        databaseObj: {
          state: 'Arizona',
          number_of_music_festivals: 10,
          major_airport: 'Phoenix Sky Harbor International Airport',
          tourism_website: 'https://www.visitarizona.com'
        }
      })
    } else if (url.includes('festivals')) {
      this.setState({
        databaseObj: { 
          festival_name: 'Arizona Roots',
          start_end_dates: '2/9/19-2/10/19', 
          city: 'Chandler', 
          image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2016/10/California-Roots-Hero-Pic-600x400.jpg' 
        }
      })
    }

    switch (this.state.method) {
      case 'GET':
        this.submitGet(url)
        break
      case 'POST':
        this.submitPost(url)
        break
      case 'PUT':
        this.submitPut(url)
        break
      case 'DELETE':
        this.submitDelete(url)
        break
    }
  }


  submitGet = async (url) => {
    const response = await fetch(url, {
      method: this.state.method,
    })
    const result = await response.json()
    this.props.handleResult(result)
  }


  submitPost = async (url) => {
    const response = await fetch(url, {
      method: this.state.method,
      headers: {
        'Content-Type': 'application/json'
      },
       body: JSON.stringify(this.state.databaseObj)
    })
    const result = await response.json()
    this.props.handleResult(result)
  }


  submitPut = async (url) => {
    const response = await fetch(url, {
      method: this.state.method,
      headers: {
        'Content-Type': 'application/json'
      },
       body: JSON.stringify(this.state.databaseObj)
    })
    const result = await response.json()
    this.props.handleResult(result)
  }


  submitDelete = async (url) => {
    const response = await fetch(url, {
      method: this.state.method
    })
    const result = await response.json()
    this.props.handleResult(result)
  }

  changeIdRequiredState = (event) => {
    event.preventDefault()

    event.currentTarget.childNodes.forEach(option => {

      if (option.selected) {
        this.setState({ path: option.innerText})
        if (option.className === 'option-id') {
          this.setState({ idRequired: true })
        } else {
          this.setState({ idRequired: false })
        }
      }
    })
  }

  updatePath = (e) => {
    e.preventDefault()

    const path = this.state.path.replace(':id', e.currentTarget.value)
    this.setState({ path })
  }

  changeInputStyleOnStateChange = () => {
    if (this.state.idRequired) {
      return <input onChange={ this.updatePath } placeholder="Enter an ID number" type='number'/>
    } else {
      return 
    }
  }

  render() {
    return (
      <form onSubmit={ this.submitRequest }>
        <select>
          <option>GET</option>
          <option>POST</option>
          <option>PUT</option>
          <option>DELETE</option>
        </select>
        <select onChange={this.changeIdRequiredState}>
          <option>/api/v1/states</option>
          <option className='option-id'>/api/v1/states/:id</option>
          <option>/api/v1/festivals</option>
          <option className='option-id'>/api/v1/states?state_id=:id</option>
          <option className='option-id'>/api/v1/states/:id/festivals</option>
          <option className='option-id'>/api/v1/festivals/:id</option>
        </select>
        { this.changeInputStyleOnStateChange() }
        <button type="submit">Send</button>
      </form>
    )
  }
}
