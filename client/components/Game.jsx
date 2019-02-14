import React from "react";

class Game extends React.Component {
  constructor() {
    super();
  }
  state = {};



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
          <button onClick={console.log('next click')}>Next</button>
        </div>
      </div>
    );
  }


}

export default Game;
