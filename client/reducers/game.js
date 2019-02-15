import { REQUEST_QUESTION, RECEIVE_QUESTION } from "../actions";
const initialState = {
  questions: [],
  goodCount: 0,
  badCount: 0,
  goodAnswer: "",
  badAnswer: "",
  goodVBadCount: 0,
  questionNum: 1,
  loading: false
};
const game = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_QUESTION:
      return {
        ...state, loading: action.loading
      };

    case RECEIVE_QUESTION:
      return {
        ...state, questions: action.question, loading: action.loading
      };

    default:
      return state;
  }
};

export default game;
