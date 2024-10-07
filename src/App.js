import './App.css';
import Create from './Components/Create';
import  Navbar from './Components/Navbar';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import StudentList from './Components/StudentList';
import StudentDetails from './Components/StudentDetails';
import EditStudent from './Components/EditStudents';

function App() {
  return (
    <Router>
      <Navbar/>
      <div className='container'>
        <Switch>
        <Route exact path="/">
            <StudentList />
          </Route>
          <Route path="/create-student">
            <Create/>
          </Route>
          <Route path="/student-details/:id">
            <StudentDetails/>
          </Route>
          <Route path="/edit-student/:id">
            <EditStudent />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
