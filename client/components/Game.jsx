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
        <p>do a lightning talk with no preparation or endure a day without Ranjit?</p>
        <div className="flex-container">
          <button className="button-a">Lightning talk</button>
          <button className="button-b">Ranjit</button>
        </div>
        <div>
          <button className="status">Next</button>
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
