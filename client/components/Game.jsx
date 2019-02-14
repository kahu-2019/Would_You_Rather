import React from "react";
import { connect } from "react-redux";

class Game extends React.Component {
  constructor() {
    super();
  }
  state = {};

  
  // nextQuestion = () => {dispatch(nextQuestion(props.questionNum))=>
  // )

  render() {
    return (
      <div>
        <div className="Question" />
        <div>
          <button>Good Answer</button>
          <button>Bad Answer</button>
        </div>
        <div>
          <button onClick={console.log('next click')}>Next</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    gameState: state.gameState
  }
}

export default connect(mapStateToProps)(Game);
