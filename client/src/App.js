import React, { Component } from 'react';
import StudentTable from './components/studentTable';
import TeacherTable from './components/teacherTable';
import LoginPage from './components/loginPage';
import SignupPage from './components/signupPage';
import { Route } from 'react-router-dom';
import './css/app.css';

class App extends Component {  
  
  render() {
    return (
        <div className="App">
          <Route exact path = '/' component={LoginPage}/>
          <Route exact path = '/signupPage' component={SignupPage}/>
          <Route exact path = '/studentTable' component={StudentTable}/>
          <Route path = '/teacherTable' component={TeacherTable}/>
        </div>
    );
  }
}

export default App;