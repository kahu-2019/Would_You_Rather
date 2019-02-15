import { REQUEST_QUESTION, RECEIVE_QUESTION } from "../actions";
const initialState = {
  question: "",
  goodCount: 0,
  badCount: 0,
  goodAnswer: "",
  badAnswer: "",
  goodVBadCount: 0,
  loading: false
};
const game = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_QUESTION:
      return {
        loading: action.loading
      };

    case RECEIVE_QUESTION:
      return;

    default:
      return state;
  }
};

export default game;
