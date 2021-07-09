import React, {Component} from "react";

// import './work-list-item.css'

export default class WorkListItem extends Component {

    renderItems(arr) {
        return arr.map((item) => {
            return (
                <li>
                    {item}
                </li>
            )
        })
    }

    render() {
        const {company, date, position, obligations} = this.props
        const duties = obligations.split(';')
        const items = this.renderItems(duties)

        return (
            <div className="app-list-item">
                <div>
                    <h4>{company}</h4>
                    <h4>{date}</h4>
                </div>
                <div>
                    <h5>{position}</h5>
                </div>
                <ul className="app-list-item-label">
                    {items}
                </ul>
            </div>
        )
    }
}
