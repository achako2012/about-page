import LeftSide from "../components/left-side";
import RightSide from "../components/right-side";
import {Component} from "react";

export default class AboutPage extends Component{
    render(){
        return(
            <div className='app-content'>
                <LeftSide/>
                <RightSide/>
            </div>
        )
    }
}
