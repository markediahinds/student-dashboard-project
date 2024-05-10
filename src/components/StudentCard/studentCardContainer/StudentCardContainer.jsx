import React from 'react'
import './studentcardcontainer.scss';
import StudentCard from '../studentCard/StudentCard.jsx'

const StudentCardContainer = ({data, cohort}) => {
  return (
    <main className="student-list">
        <h3> {cohort} </h3>
        <p> Total Students: <span>{data.length}</span></p>
        <ul className="student-list__item">
         {data.map(
          (student, index) => 
          (<li key={index}> 
            <StudentCard
              data={student}
            /> 
          </li>))} 
        </ul>
        
    </main>
  )
}
    
export default StudentCardContainer;