import React, { Fragment } from 'react'
import {startGame} from '../actions'
class Start extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return (
            <Fragment>
                <h2>How To Play</h2>
                <div>
                    <p>When you hit the play button, you will be asked a question and two answer cards will pop up. You then choose which answer you prefer. Then proceed to answer the remaining questions until you have answered ten. By the end of the game, you will learn something about yourself.</p>
                </div>
                <div>
                </div>
            </Fragment>
        )
    }
}
export default Start