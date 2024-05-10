import React from 'react'
import './studentinfo.scss';
import onTrackOrNot from '../../../../utils/onTrackOrNot.js';


const StudentInfo = ({setExpanded, expanded, data}) => {
  const {preferredName, middleName, surname} = data.names;
  const userName = data.username;
  const img = data.profilePhoto;
  const birthDay = {
    month: new Date(data.dob).toLocaleString('default', { month: 'long' }), 
    day: new Date(data.dob).getDate(),
    theYear: new Date(data.dob).getFullYear()
  };
  const stats = {
    codewars: data.codewars, 
    certifications: data.certifications, 
    scores: data.cohort.scores
  }
  let onTrack = onTrackOrNot(stats); 
  

  return (
    <section className="student-list__info">
    <div className="student-list__img">
        <img src={img} />
    </div>
    <div className="student-list__details">
        <h3> {`${preferredName} ${middleName[0]}. ${surname}`}</h3>
        <p> {userName}</p>
        <p> <span>Birthday:</span> {`${birthDay.month} ${birthDay.day}, ${birthDay.theYear}`}</p>
        <button onClick={() => setExpanded(val => !val)}> {expanded ? "Show Less": "Show More"}</button>
    </div>
    <div className="student-list__ontrack">
        <p style={onTrack ? {color: 'green'} : {color: 'red'}}> {onTrack ? 'On Track To Gradaute' : "Not On Track"}</p>
    </div>
</section>
  )
}

export default StudentInfo