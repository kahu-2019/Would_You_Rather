import React from "react";
import { connect } from "react-redux";
import { getQuestions } from "../actions";

class Game extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    question: []
  };

  componentDidMount(){
    this.props.dispatch(getQuestions())
    .then(() => {
      this.setState({question:[this.props.questions[0]]})
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="Question" />
        {this.state.question.map((question,i) => {
          return(
            <React.Fragment key={i}>
              <p>{question.question}</p>
              <div className="flex-container">
                <button className="button-a">{question.goodAnswer}</button>
                <button className="button-b">{question.badAnswer}</button>
              </div>
            </React.Fragment>
          )
        })}
          <div>
            <button className="status">Next</button>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    questions: state.questions
  }
}

export default connect(mapStateToProps)(Game);
