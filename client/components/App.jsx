import React from 'react'
import Start from './Start'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
    }
  }
  render(){
    return (
      <div>
        <h1>Hello</h1>
        <Start />
      </div>
    )
  }
}

export default App
