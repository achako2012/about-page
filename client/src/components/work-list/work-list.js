import React, {Component} from 'react';

import WorkListItem from './work-list-item'
import Spinner from "../spinner";


export default class WorkList extends Component {

    state = {
        itemList: null
    }

    componentDidMount() {
        const {getData} = this.props
        getData()
            .then(itemList => {
                this.setState({itemList})
            })
    }

    renderItems(arr) {
        return arr.map((item) => {
            const {_id, ...work} = item
            return (
                <li key={_id} className="list-group-item">
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

