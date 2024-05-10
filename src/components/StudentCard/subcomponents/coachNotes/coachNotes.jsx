import React from 'react';
import './coachnotes.scss';

const CoachNotes = () => {
  return (
    <section className="student-list__notes">
    <h3> 1-on-1 Notes </h3>
    <form>
        <div className="student-list__form-group">
            <label htmlFor="comment"> Comment: </label>
            <input type="text" id="comment" name="comment" /> 
        </div>
        <div className="student-list__form-group">
            <label htmlFor="commenter"> Commenter: </label>
            <input type="text" id="commenter" name="commenter" /> 
        </div>
        <button type="submit"> Add Note </button>
    </form>
    <ul className="student-list__comments">
        <li>Alan R. says, Israel is a pleasure to work with!</li>
    </ul>
</section>
  )
}

export default CoachNotes