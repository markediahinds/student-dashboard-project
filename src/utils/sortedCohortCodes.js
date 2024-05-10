import splitString from './splitString';
import sortSeasonYear from './sortSeasonYear';

const sortedCohortCodes = (data) =>  {
    const values = splitString(data);
    return sortSeasonYear(values);
  }




  export default sortedCohortCodes;