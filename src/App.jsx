import React from "react"
// import Index  from "./tab栏案例/Index.jsx"
import Main from "./组件间传值/Main"
import Index from "./tab栏案例/Index"
class App extends React.Component{
  constructor(){
    super()
    this.state = {
      message: ['流行','经典','童谣']
    }
  }
  
  render(){
    const {message} = this.state
    return (
      
        <div>
          <Main></Main>
          <Index message = {message}></Index>
        </div>
      
    )
  }
}

export default App