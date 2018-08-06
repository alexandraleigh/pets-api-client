import React, { Component } from 'react'

class Home extends Component {
   state = {
   }
   render () {
      return (
        <div id='container'>
           <a href="signin">Sign In</a>
           <a href="signup" >Sign Up</a>
        </div>
      )
   }
}

export default Home
