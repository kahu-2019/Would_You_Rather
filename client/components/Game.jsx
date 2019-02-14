import React from "react";
import { connect } from "react-redux";

class Game extends React.Component {
  constructor() {
    super();

    state = {};
  }
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
          <button onClick={this.props.dispatch()}>Next</button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Game);
