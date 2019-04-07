import React from "react";
import { connect } from "react-redux";
import { getQuestions } from "../actions";

class Game extends React.Component {
  constructor() {
    super();
  }
  state = {
    
  };

  componentDidMount(){
    this.props.dispatch(getQuestions())
  }

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
    questions: state.questions
  }
}

export default connect(mapStateToProps)(Game);
