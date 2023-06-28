import React, { PureComponent } from 'react'
import { AppWrapper } from './style'
import classNames from 'classnames'

export class App extends PureComponent {
  constructor(){
    super()
    this.state = {
      data: {
        size: '20px',
        color: 'yellow',
        isbbb: true
      }
    }
  }
  render() {
    // debugger
    const { size,color,isbbb } = this.state.data
    return (
      <AppWrapper size={size} color={color}>
        <div className="one">one</div>
        <div className="two">two</div>
        <div className={classNames({'bbb':isbbb})}></div>
      </AppWrapper>
    )
  }
}

export default App