const onTrackOrNot = (obj) => { 
    const {resume,linkedin, github, mockInterview} = obj.certifications
    const {total} = obj.codewars.current
    if(resume && linkedin && github && mockInterview && total > 600){
      return true;
    }
    return false;
  };

  export default onTrackOrNot; 