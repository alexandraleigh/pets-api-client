import React, { Component } from 'react'
import axios from 'axios'

class PetsContainer extends Component {
  // initializing the state to store the pets from axios call to the API
  constructor(props) {
    super(props)
    this.state = {
      pets: []
    }
  }  
  
  componentDidMount() {
    axios.get('http://localhost:3000/pets')
    .then(response => {
      console.log(response)
      this.setState({pets: response.data})
    })
    .catch(error => console.log(error))
  }
  
  render() {
    return (
      <div>
        Pets
      </div>
    )
  }
}

export default PetsContainer