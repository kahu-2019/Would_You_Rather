import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchQuestions} from '../actions'

class Start extends React.Component {
    render(){
      let click = () => {
        this.props.startGame()
      }
        return (
            <Fragment>
                <h2>How To Play</h2>
                <div>
                    <p>When you hit the play button, you will be asked a question and two answer cards will pop up. You then choose which answer you prefer. Then proceed to answer the remaining questions until you have answered ten. By the end of the game, you will learn something about yourself.</p>
                </div>
              <Link to='/game' onClick={click}>Start game</Link>
            </Fragment>
        )
    }
}

function mapDispatchToProps(dispatch) {
  return {
    startGame: () => {
      dispatch(fetchQuestions())
    }
  }
}
export default connect(undefined, mapDispatchToProps)(Start)
