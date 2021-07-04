import React, {Component} from 'react';

import WorkListItem from './work-list-item'
// import './work-list.css'
import Spinner from "../spinner";


export default class WorkList extends Component {

    state = {
        itemList: null
    }

    componentDidMount() {
        const {getData} = this.props
        this.itemList = getData;
        this.setState({
            itemList: this.itemList
        });
    }

    renderItems(arr) {
        return arr.map((item) => {
            const {id, ...work} = item
            return (
                <li key={id} className="list-group-item">
                    <WorkListItem {...work}/>
                </li>
            )
        })
    }

    render() {

        const {itemList} = this.state

        if (!itemList) {
            return <Spinner/>
        }

        const items = this.renderItems(itemList)

        return (
            <div>
                <h1 >
                    Work Experience
                </h1>
                <ul>
                    {items}
                </ul>
            </div>
        )
    }
}

