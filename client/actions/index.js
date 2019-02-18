import request from "superagent";

export * from './old'
export const SET_QUESTIONS = "SET_QUESTIONS"
export const ANSWER_QUESTION = "ANSWER_QUESTIONS"
export const RESET_GAME = "RESET_GAME"

export function setQuestions(questions) {
  return {
    type: SET_QUESTIONS,
    questions
  }
}

export function answerQuestion(answer) {
  return {
    type: ANSWER_QUESTION,
    answer
  }
}

export function resetGame() {
  return {
    type: RESET_GAME
  }
}

export function fetchQuestions() {
  return (dispatch) => {
    return request
      .get('/api/v1/questions')
      .then(res => {
        dispatch(setQuestions(res.body.questions))
      }).catch(e => {
        console.log(e)
      })

  }
}
