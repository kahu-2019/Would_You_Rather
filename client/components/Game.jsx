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
        {console.log(this.props.gameState)}

        {this.props.gameState.loading && <h3>Loading..</h3>}

        <ul>
          {!this.props.gameState.loading &&
            this.props.gameState.questions.map(item => {
              // if(item.id == 1) {
              //   return (<p> {item.question} </p>)

              return <li>{item.question}</li>;
            })}
        </ul>
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
    gameState: mapReduxStore.game
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
