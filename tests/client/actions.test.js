import nock from 'nock'

import {fetchPosts, fetchQuestions} from '../../client/actions'
import fakeQuestions from './fakeQuestions.json'

test('fetchPosts', () => {
  const scope = nock('http://localhost')
    .get('/api/v1/reddit/subreddit/bananas')
    .reply(200, [{data: 'yay, bananas'}])

  const dispatch = jest.fn()

  return fetchPosts('bananas')(dispatch)
    .then(() => {
      expect(dispatch.mock.calls.length).toBe(2)
      expect(dispatch.mock.calls[0][0].type).toBe('REQUEST_POSTS')
      expect(dispatch.mock.calls[1][0].type).toBe('RECEIVE_POSTS')
      scope.done()
    })
})


test('fetchQuestions', () => {
  const scope = nock('http://localhost')
    .get('/api/v1/questions')
    .reply(200, {questions: fakeQuestions})

  const dispatch = jest.fn()
  return fetchQuestions()(dispatch)
    .then(() => {
      expect(dispatch.mock.calls[0][0].type).toBe('SET_QUESTIONS')
      expect(dispatch.mock.calls[0][0].questions).toEqual(fakeQuestions)
    })
})
