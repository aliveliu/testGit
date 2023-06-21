import React, { Component } from 'react'
import '../tab栏案例/style.css'
export class Index extends Component {
  
  render() {
    return (
      <div class='tab'>
        {this.props.message.map((item,index) => 
         
            <li class='active'>{item}</li>
          
        )}
      </div>
    )
  }
}

export default Index
