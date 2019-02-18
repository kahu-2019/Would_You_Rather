import React, {Fragment} from 'react';

import Header from './Header'
import Start from './Start'
import Game from './Game';
import {HashRouter as Router, Route} from 'react-router-dom'


export default class App extends React.Component {

  render(){

    return (
      <Router>
        <Fragment>
          <Header />
          <Route path='/' exact={true} component={Start} />
          <Route path='/game' component={Game} />
        </Fragment>
      </Router>
    )

  }

}


