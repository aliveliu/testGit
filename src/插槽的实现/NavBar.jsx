import React, { Component } from 'react'

export class NavBar extends Component {

 
  render() {
    const {children} = this.props
    return (
      <div>
        <div>{children[0]}</div>
        <div>{children[1]}</div>
        <div>第三部分</div>
      </div>
    )
  }
}

export default NavBar