import React from 'react';

import Header from './Header'
import Start from './Start'
import Game from './Game';
import { connect } from 'react-redux';


class App extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      play:null
    }
    this.playGame = this.playGame.bind(this)
  }

  playGame(){
    this.setState({play:true})
  }

  getState(){
    this.playGame()
  }

  render(){

    return (
      <div>
        <Header />
        {!this.state.play && <Start sendStates={this.getState}/>}
        <button onClick ={this.playGame} className="status">Play</button>

        {this.state.play &&  <Game />}
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
