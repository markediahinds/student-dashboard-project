import React from 'react'
import React, { useState } from 'react';
import StudentInfo from '../subcomponents/StudentInfo/studentInfo.jsx';
import ShowMore from '../subcomponents/ShowMore/showMore.jsx';
import CoachNotes from '../subcomponents/CoachNotes/coachNotes.jsx';
import './studentcard.scss';

const StudentCard = ({data}) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <> 
      <StudentInfo
        expanded={expanded}
        setExpanded={setExpanded}
        data={data}
      />

      {expanded && 
        <>
          <ShowMore
            data={data}
          />
          <CoachNotes/>
        </>
      }
    </>
  )
}

export default StudentCard;