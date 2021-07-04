import React from "react";
import './education.css'

const Education = ({university, faculty}) => {

    return (
        <div className='education-list'>
            <h2 className='education-list-header'>
                Education
            </h2>
            <div className='education-list-group'>
                <span>
                    <h4 className='education-list-item'>
                        {faculty}
                    </h4>
                <h5 className='education-list-item'>
                    {university}
                </h5>
                </span>
            </div>
        </div>
    )
}

export default Education;