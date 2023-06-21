import React, { Component } from 'react'

export class Header extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  render() {
    const {message} = this.props
    return (
      <div>
        Header
        <h2>{message}</h2>
      </div>
    )
  }
}

export default Header