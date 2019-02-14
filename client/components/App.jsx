import React from 'react';

import Header from './Header'
import Start from './Start'
import Game from './Game';
import { connect } from 'react-redux';


class App extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render(){

    return (
      <div>
        <Header />
        <Start />
        <Game />
      </div>
    )

  }

}

const mapStateToProps = state => {
  return {
    gameState: state.gameState
  }
}

export default connect(mapStateToProps)(App)
