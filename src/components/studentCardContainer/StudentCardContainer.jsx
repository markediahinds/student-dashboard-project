import React from 'react'
import './StudentCardContainer.scss';
import StudentCard from '../studentCard/StudentCard.jsx'

const StudentCardContainer = ({students}) => {
    return (
    <div className="student-card-container">
        <div>
            <div className="student-card-container__title">All Students</div>
            <div className="student-card-container__count">Total Students: <span>{students.length}</span></div>
        </div>
        <div className="student-card-container__list">
            {students.map(student => {
                return (
                    <StudentCard student={student} key={student.id}/>
                )
            })}
        </div>
    </div>
    )
}
    
export default StudentCardContainer;