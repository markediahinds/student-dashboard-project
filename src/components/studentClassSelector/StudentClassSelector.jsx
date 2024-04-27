import React from 'react'
import './StudentClassSelector.scss';


const classes = [
    'All Students',
    'Winter 2026',
    'Fall 2026',
    'Summer 2026',
    'Spring 2026',
    'Winter 2025',
    'Fall 2025',
    'Summer 2025',
    'Spring 2025',
]

const StudentClassSelector = () => {
  return (
    <div className="student-class-selector">
        <div className="student-class-selector__title">Choose a Class by Start Date</div>
            <div className="student-class-selector__selections">
               {classes.map(classSelection => {
                return (
                    <div className="student-class-selector__selection">
                        {classSelection}
                    </div>
                )
               })} 
                </div>
            </div>
    )
}

export default StudentClassSelector;