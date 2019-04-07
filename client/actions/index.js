import request from "superagent";
import {getQuestions as apiGetQuestions} from '../api/questions'

export function getQuestions() {
  return dispatch => {
      return apiGetQuestions()
      .then(questions => {
       dispatch(saveQuestions(questions))
    })
  }
}

export function saveQuestions(questions){
  return {
    type: 'SAVE_QUESTIONS',
    questions
  };
};

export const receivePosts = posts => {
  return {
    type: RECEIVE_POSTS,
    posts: posts.map(post => post.data)
  };
};

export const showError = errorMessage => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  };
};


export function startGame(){
  return {}
}