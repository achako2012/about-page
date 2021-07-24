import React, {Component} from 'react';
import './services.css'

//Main class to render any list of elements
export default class Skills extends Component {

    state = {
        itemList: null
    }

    //Function pattern
    componentDidMount() {
        const {getData} = this.props
        this.itemList = getData;
        this.setState({
            itemList: this.itemList
        });
    }

    //Render Function Pattern
    renderItems(arr) {
        if (arr) {
            //I catch in props what exactly variables will be show in list
            return arr.map((item) => {
                const {id} = item
                const content = this.props.renderItem(item)
                return (
                    <li key={id} className="list-group-item">
                        {content}
                    </li>
                )
            })
        }
    }

    render() {

        const {itemList} = this.state

        const items = this.renderItems(itemList)

        return (
            <div className='skills-list'>
                <h2 className='skills-list-header'>
                    Technology Stack
                </h2>
                <ul>
                    {items}
                </ul>
            </div>
        )
    }
}