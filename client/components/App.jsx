import React from 'react';

import Header from './Header'
import Start from './Start'
import Game from './Game';
import { connect } from 'react-redux';
import { getQuestion } from '../api/questions';


class App extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      play:null
    }
    this.firstQuestion = this.firstQuestion.bind(this)
  }

  firstQuestion(){
    this.setState({play:true})
    // this.props.dispatch(getQuestion());
  }

  render(){

    return (
      <div>
        <Header />
        {!this.state.play && <Start sendStates={this.getState}/>}
        <button onClick ={this.firstQuestion} className="status">Play</button>

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
