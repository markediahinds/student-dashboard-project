import React from 'react';
import './cohortseason.scss';

const CohortListItem = ({ item, setStudents, data, setCohort }) => {
  const handleClick = () => {
    if (item === "All Students") {
      setCohort(item);
      setStudents(data);  
    } else {
      const cohortValue = item.split(' ').join('');  
      const newData = data.filter(info => info.cohort.cohortCode === cohortValue);
      setCohort(item);
      setStudents(newData);
    }
  };

  return (
    <li onClick={handleClick} className='cohort-list__item'>{item}</li>
  );
};

export default CohortSeason;
