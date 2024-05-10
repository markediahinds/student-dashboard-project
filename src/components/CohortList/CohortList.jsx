import React, { useState } from 'react'
import CohortSeason from './CohortSeason';
import './cohortseason.scss';
import sortedCohortCodes from '../../utils/sortedCohortCodes';

const CohortList = ({setStudents, data, setCohort}) => {
  const items = ["All Students", ...sortedCohortCodes(data)];
  
  return (
    <aside className="cohort-list">
        <h3 className='cohort-list__header'> Choose a Class by Start Date </h3>
        <ul> 
          {items.map((item, i) => (<CohortSeason item={item} setStudents={setStudents} setCohort={setCohort} data={data} key={i} />))}
        </ul>
    </aside>
  )
}

export default CohortList


