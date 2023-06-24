import React, { Component } from 'react'
import NavBar from './NavBar'
export class App extends Component {
  render() {
    return (
      <div>App
        <NavBar>
          <div>i am top</div>
          <div>i am main</div>
        </NavBar>
      </div>
    )
  }
}

export default App