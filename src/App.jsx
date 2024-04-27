//DATA
import students from './data/data.json';
import './index.css'

//COMPONENTS
import StudentCardContainer from './components/studentCardContainer/StudentCardContainer';
import StudentClassSelector from './components/studentClassSelector/StudentClassSelector';

function App() {
// console.log(students)
  return (
    <div>
      <h1 className="student-dashboard-header">Student Dashboard</h1>
      <div class="two-columns">
        <StudentClassSelector/>
        <StudentCardContainer students={students}/>
    </div>
    </div>
  );
  }         

export default App;
