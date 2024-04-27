import React from 'react'
import './StudentCard.scss';

const StudentCard = ({student}) => {

const fullName = `${student.names.preferredName} ${student.names.middleName} ${student.names.surname}`;



    return (
        <div className="student-card">
            <div className="student-card__img">
              <img src={student.profilePhoto}/>
            </div>
            <div className="student-card__info">
              <div className="student-card__name">
              {fullName}
              </div>
              <div className="student-card__email">
                {student.username}
              </div>
              <div className="student-card__dob">
                <span>Birthday:</span>{student.dob}
              </div>   
            </div>
          </div>
    )
}

export default StudentCard;