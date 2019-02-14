import { REQUEST_QUESTION, RECEIVE_QUESTION } from "../actions";

const game = (state = initialState, action) => {
  initialState = {
    question: "",
    goodCount: 10,
    badCount: 10,
    goodAnswer: "",
    badAnswer: ""
  };
  switch (action.type) {
    case REQUEST_QUESTION:
      return;

    case RECEIVE_QUESTION:
      return;

    default:
      return state;
  }
};

export default game;
