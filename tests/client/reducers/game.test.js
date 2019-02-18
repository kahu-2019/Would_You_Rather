import game from '../../../client/reducers/game'
import {setQuestions, answerQuestion} from '../../../client/actions'
import fakeQuestions from '../fakeQuestions.json'


test('initial state', () => {
  let state = game(undefined, {})
  expect(state.questions.length).toBe(0)
  expect(state.currentQuestion).toBe(undefined)
  expect(state.goodCount).toBe(0)
  expect(state.badCount).toBe(0)
})

test('load questions', () => {
  let state = game(undefined, setQuestions(fakeQuestions))
  expect(state.questions.length).toBe(2)
  expect(state.currentQuestion.id).toBe(1)
})

describe('answer question', () => {
  let newGameState = game(undefined, setQuestions(fakeQuestions))

  test('stays on same question if answer invalid', () => {
    let state = game(newGameState, answerQuestion('bananas'))
    expect(state.currentQuestion.id).toBe(1)
    expect(state.goodCount).toBe(0)
    expect(state.badCount).toBe(0)
  })
  test('moves to the next question if answer is valid', () => {
    let state = game(newGameState, answerQuestion('shaggy'))
    expect(state.currentQuestion.id).toBe(2)
    expect(state.goodCount).toBe(1)
    expect(state.badCount).toBe(0)
  })
  test('currentQuestion is undefined if this is the last question in list', () => {
    let state = game(newGameState, answerQuestion('shaggy'))
    let nextState = game(state, answerQuestion('nothing'))
    expect(nextState.currentQuestion).toBe(undefined)
    expect(nextState.badCount).toBe(1)
  })
})
