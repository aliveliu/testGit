import React, { Component } from 'react'

export class Main extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  addClick(count){
    console.log(count);
    this.props.add1(count)
  }
  render() {
    return (
      <div>Main
        <button onClick={() => this.addClick('1')}>+1</button>
      </div>
    )
  }
}

export default Main