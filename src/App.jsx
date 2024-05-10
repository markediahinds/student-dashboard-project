// //DATA
// import students from './data/data.json';
// import './app.scss'

// //COMPONENTS
// import StudentCardContainer from './components/StudentList/studentCardContainer/StudentCardContainer';
// import StudentClassSelector from './components/StudentList/studentClassSelector/StudentClassSelector';

// function App() {
// // console.log(students)
//   return (
//     <div>
//       <h1 className="student-dashboard-header">Student Dashboard</h1>
//       <div class="two-columns">
//         <StudentClassSelector/>
//         <StudentCardContainer students={students}/>
//     </div>
//     </div>
//   );
//   }         

// export default App;


import React, { useState } from 'react'
import CohortList from './components/CohortList/CohortList'
import StudentCard from './components/StudentCard/studentCard/StudentCard'
import './app.scss'
import data from './data/data.json'


const App = () => {
  const [students, setStudents] = useState(data);
  const [cohort, setCohort] = useState("All Students");
  

  return (
    <div className='app'>
      <h1 className="student-dashboard-header">Student Dashboard</h1>
      <CohortList data={data} setStudents={setStudents} setCohort={setCohort}/>
      <StudentCard data={students} cohort={cohort}/>
    </div>
  )
}

export default App