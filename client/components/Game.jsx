import React from "react";

class Game extends React.Component {
  constructor() {
    super();
  }
  state = {};

nextQuestion()


  render() {

    return (
      <div>
        <div className="Question">
        
        </div>
        <div>
          <button>Good Answer</button>
          <button>Bad Answer</button>
        </div>
        <div>
          <button onClick={nextQuestion(props)}>Next</button>
        </div>
      </div>
    );
  }


}

export default Game;
