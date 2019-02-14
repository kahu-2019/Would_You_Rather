import React from 'react'
import Start from './Start'
import Header from './Header'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
    }
  }
  render(){
    return (
      <div>
        <Header />
        <Start />
      </div>
    )
  }
}

export default App
