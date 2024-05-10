import React from 'react';
import './showmore.scss';

const ShowMore = ({data}) => {
  const stats = {
    codewars: data.codewars, 
    certifications: data.certifications, 
    scores: data.cohort.scores
  }

  return (
    <section className="student-list__portfolio">
      <div className="student-list__codewars">
          <h3> Codewars </h3>
          <p> <span>Current Total:</span> {stats.codewars.current.total}</p>
          <p> <span>Last Week:</span> {stats.codewars.current.lastWeek}</p>
          <p> <span>Goal:</span> {stats.codewars.goal.total}</p>
          <p> <span>Percentage Of Goal Achieved:</span> { ((stats.codewars.current.total / stats.codewars.goal.total) * 100).toFixed()}%</p>
      </div>
      <div className="student-list__scores">
          <h3> Scores </h3>
          <p> <span>Assignments:</span> {stats.scores.assignments * 100}%</p>
          <p> <span>Projects: </span>  {stats.scores.projects * 100}%</p>
          <p> <span>Assessments: </span>  {stats.scores.assessments * 100}%</p>
      </div>
      <div className="student-list__certifications">
        <h3> Certifications </h3>
        <p style={stats.certifications.resume ? {color: "green"} : {color: "red"}}> <span>Resume: </span> {stats.certifications.resume ? '\u2713' : '\u2717'}    </p>
        <p style={stats.certifications.linkedin ? {color: "green"} : {color: "red"}}> <span>Linkedin:</span> {stats.certifications.linkedin ? '\u2713' : '\u2717'}  </p>
        <p style={stats.certifications.mockInterview ? {color: "green"} : {color: "red"}}> <span>Mock Interview:</span>  {stats.certifications.mockInterview ? '\u2713' : '\u2717'} </p>
        <p style={stats.certifications.github ? {color: "green"} : {color: "red"}}> <span>Github: </span> {stats.certifications.github ? '\u2713' : '\u2717'}  </p>
      </div>
    </section>
  )
}

export default ShowMore