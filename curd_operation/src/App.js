import './App.css';
import { CreateEmp } from './component/CreateEmp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Employee } from './component/Employee';
import { EmployeeList } from './component/EmployeeList';
import { EmployeeEdit } from './component/EmployeeEdit';

function App() {
  
  return (
    <div className="App">
     <Router>
        <Employee />
        <Routes>   
          <Route path="/createEmp" element= {<CreateEmp/>} />
          <Route path="/employeeList" element= {<EmployeeList/>} />
          <Route path="/employeeEdit/:id" element= {<EmployeeEdit/>} /> 
        </Routes>
      </Router>
    </div>
  );    
}

export default App;
