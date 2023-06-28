import React, { PureComponent } from 'react'

export class Index extends PureComponent {
  constructor(){
    super()
    this.state = {
      books: [
        {name: '***01',price: 99},
        {name: '***02',price: 299},
      ]
    }
  }
  increace(){
    const addBooks = {name: '***03',price: 399}
    const books = [...this.state.books]
    books.push(addBooks)
    this.setState({
      books
    })
  }
  render() {
    const {books} = this.state
    return (
      <div>
        {books.map(item => <li>{item.name}</li>)}
        <button onClick={() => this.increace()}>+1</button>
      </div>
    )
  }
}

export default Index