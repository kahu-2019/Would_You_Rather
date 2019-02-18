import {SET_QUESTIONS, ANSWER_QUESTION, RESET_GAME} from '../actions'

const initialState = {
  questions: [],
  currentQuestion: undefined,
  goodCount: 0,
  badCount: 0
};

const game = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUESTIONS:
      return {
        ...state,
        questions: action.questions,
        currentQuestion: action.questions[0]
      }

    case ANSWER_QUESTION:
      let {goodAnswer, badAnswer} = state.currentQuestion
      let {goodCount, badCount} = state
      if (action.answer != goodAnswer && action.answer != badAnswer) {
        return state
      }
      (action.answer == goodAnswer) ? goodCount++ : badCount++
      let idx = state.questions.indexOf(state.currentQuestion)
      let nextQuestion = state.questions[idx+1]
      //TODO handle finishing all questions
      return {...state, goodCount, badCount,
        currentQuestion: nextQuestion
      }
    case RESET_GAME:
      return {...state,
        currentQuestion: state.questions[0],
        goodCount: 0,
        badCount: 0
      }

    default:
      return state;
  }
};

export default game;
