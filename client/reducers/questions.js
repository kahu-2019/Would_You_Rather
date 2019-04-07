// var initialState = {
//   question: "",
//   goodCount: 0,
//   badCount: 0,
//   goodAnswer: "",
//   badAnswer: "",
//   goodVBadCount: 0,
//   gameState:''
// };

var initialState = []

const questions = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_QUESTIONS':
      return action.questions;
    default:
      return state;
  }
};

export default questions;
