import React, {Component} from 'react'
import './app.css'
import LeftSide from "../left-side";
import RightSide from "../right-side";

export default class App extends Component {

    render() {
        return (
            <div className='app'>
                <div className='app-content'>
                    <LeftSide/>
                    <RightSide/>
                </div>
            </div>
        )
    }
}
