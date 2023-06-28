import React from "react"
// import Index  from "./tab栏案例/Index.jsx"
import Main from "./组件间传值/Main"
import Index from "./数据不可变/Index"
class App extends React.Component{
  constructor(){
    super()
    this.state = {
      message: ['流行','经典','童谣'],
      tabindex: 0
    }
  }
  
  render(){
    const {message,tabindex} = this.state
    return (
      
        <div>
          <Main></Main>
          <Index></Index>
          <h2>{message[tabindex]}</h2>
        </div>
      
    )
  }
}

export default App