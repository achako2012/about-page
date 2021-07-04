import React from 'react'
import './languages.css'

const Languages = () => {

    return (
        <div className='languages-list'>
            <h2 className='languages-list-header'>
                Languages
            </h2>
            <ul className="languages-list-group">
                <li className="languages-list-item">
                    Russian, Ukraine - native
                </li>
                <li className="languages-list-item">
                    English - Upper Intermediate
                </li>
            </ul>
        </div>
    )
}

export default Languages;