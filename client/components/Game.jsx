import React from "react";
import { connect } from "react-redux";
import { fetchQuestion } from "../actions";

class Game extends React.Component {
  constructor() {
    super();
  }

  // nextQuestion = () => {dispatch(nextQuestion(props.questionNum))=>
  // )

  render() {
    return (
      <div>
        <div className="Question" />
        {/* {this.state.question} */}
        <div>
          <button>Good Answer</button>
          <button>Bad Answer</button>
        </div>
        <div>
          <button onClick={this.props.bananas}>Next</button>
        </div>
      </div>
    );
  }
}

const mapReduxStoreToProps = mapReduxStore => {
  return {
    gameState: mapReduxStore.gameState
  };
};
const mapDispatchToProps = dispatch => {
  return {
    bananas: () => {
      console.log("compo");
      dispatch(fetchQuestion());
    }
  };
};

export default connect(
  mapReduxStoreToProps,
  mapDispatchToProps
)(Game);
