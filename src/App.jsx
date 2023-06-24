import React from "react"
// import Index  from "./tab栏案例/Index.jsx"
import Main from "./组件间传值/Main"
import Index from "./tab栏案例/Index"
class App extends React.Component{
  constructor(){
    super()
    this.state = {
      message: ['流行','经典','童谣'],
      tabindex: 0
    }
  }
  change(index){
    this.setState({
      tabindex: index
    })
  }
  render(){
    const {message,tabindex} = this.state
    return (
      
        <div>
          <Main></Main>
          <Index message = {message} change = {this.change.bind(this)}></Index>
          <h2>{message[tabindex]}</h2>
        </div>
      
    )
  }
}

export default App