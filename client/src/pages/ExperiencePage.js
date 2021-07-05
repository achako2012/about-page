import React, {Component} from "react";
import GetHooks from "../hooks/getHooks";
import Spinner from "../components/spinner";
import WorkList from "../components/work-list";

export default class ExperiencePage extends Component {

    getHooks = new GetHooks()

     render() {

        if (this.response) {
            return <Spinner/>
        }

        return (
            <div className='app-content'>
                <WorkList getData={this.getHooks.getWorkList}/>
            </div>
        )
    }
}
