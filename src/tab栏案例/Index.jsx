import React, { Component } from 'react'
import '../tab栏案例/style.css'
export class Index extends Component {
  constructor(){
    super()
    this.state = {
      isActive: 0
    }
  }
  itemClick(index){
    console.log(index);
    this.setState({
      isActive: index
    })
    this.props.change(index)
  }
  render() {
    const {isActive} = this.state
    return (
      <div class='tab'>
        {this.props.message.map((item,index) => 
         
            <li onClick={(event) => this.itemClick(index)} class={`${isActive === index ? 'active' : ''} `}>{item}</li>
          
        )}
      </div>
    )
  }
}

export default Index
