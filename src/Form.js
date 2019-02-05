import React, { Component } from 'react'

export default class Form extends Component {
  constructor() {
    super()
    this.state = {
      method: 'GET',
      path: '/api/v1/states',
      databaseObj: {}
    }
  }


  submitRequest = async (e) => {
    e.preventDefault()

    const url = `https://kylie-joel-byob.herokuapp.com${this.state.path}`

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
        submitGet(url)
        break
      case 'POST':
        submitPost(url)
        break
      case 'PUT':
        submitPut(url)
        break
      case 'DELETE':
        submitDelete(url)
        break
        default
    }
  }


  submitGet = (url) => {
    const response = await fetch(url, {
      method: this.state.method,
    })
    const result = response.json()
  }


  submitPost = (url) => {

    const response = await fetch(url, {
      method: this.state.method,
      headers: {
        'Content-Type': 'application/json'
      },
       body: JSON.stringify(this.state.databaseObj)
    })
    const result = response.json()
  }

  submitPut = (url) => {

  }

  submitDelete = (url) => {

  }



  render() {
    return (
      <form onSubmit={this.submitRequest}>
        <select>
          <option>GET</option>
          <option>POST</option>
          <option>PUT</option>
          <option>DELETE</option>
        </select>
        <select>
          <option>/api/v1/states</option>
          <option>/api/v1/festivals</option>
        </select>
        <button type="submit">Send</button>
      </form>
    )
  }
}
