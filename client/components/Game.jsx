import React, {Fragment} from "react";
import { connect } from "react-redux";
import { fetchQuestions, answerQuestion, resetGame } from '../actions'

class Game extends React.Component {
  render() {
    let {fetchQuestions, saveAnswer, resetGame} = this.props
    let {currentQuestion, goodCount, badCount} = this.props
    let hasData = (currentQuestion || goodCount || badCount)

    if (!hasData) {
      return <ManualLoader fetchQuestions={fetchQuestions} />
    } else if (!currentQuestion) {
      return <Finished goodCount={goodCount} badCount={badCount} resetGame={resetGame} />
    } else {
      return <Question currentQuestion={currentQuestion} saveAnswer={saveAnswer} /> 
    }
  }
}


const ManualLoader = ({fetchQuestions}) => (
  <div>
    <button onClick={fetchQuestions}>Fetch Questions</button>
  </div>
)

const Question = ({currentQuestion, saveAnswer}) => {
  let {question, goodAnswer, badAnswer} = currentQuestion
  return <Fragment>
    <div className="Question">{question}</div>
    <div>
      <button onClick={saveAnswer}>{goodAnswer}</button>
      <button onClick={saveAnswer}>{badAnswer}</button>
    </div>
  </Fragment>
}

const Finished = ({goodCount, badCount, resetGame}) => (
  <div>
    <h2>Finished!</h2>
    <div>Good count: {goodCount}</div>
    <div>Bad count: {badCount}</div>
    <button onClick={resetGame}>Reset Game</button>
  </div>
)

const mapStateToProps = state => {
  let {currentQuestion, goodCount, badCount} = state.game
  return {
    currentQuestion,
    goodCount,
    badCount
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestions: () => {
      dispatch(fetchQuestions())
    },
    saveAnswer: (e) => {
      dispatch(answerQuestion(e.target.innerHTML))
    },
    resetGame: () => {
      dispatch(resetGame())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
