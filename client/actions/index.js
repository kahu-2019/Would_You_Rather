export * from './old'

export const SET_QUESTIONS = "SET_QUESTIONS"
export const ANSWER_QUESTION = "ANSWER_QUESTIONS"

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
