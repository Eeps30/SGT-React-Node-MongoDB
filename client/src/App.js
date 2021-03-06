import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './css/app.css';
import LandingPage from './newUI/components/landingPage';
import LoginPage from './newUI/components/loginPage';
import SignupPage from './newUI/components/signupPage';

class App extends Component {  
  
  render() {
    return (
        <div className="App">

          {/* Old UI 

          <Route exact path = '/' component={LoginPage}/>
          <Route exact path = '/signupPage' component={SignupPage}/>
          <Route exact path = '/studentTable' component={StudentTable}/>
          <Route path = '/teacherTable' component={TeacherTable}/>

          */}

          {/* New UI */}
          
          <Route exact path = '/login' component={LoginPage}/>
          <Route exact path = '/signup' component={SignupPage}/>
          <Route exact path = '/landing' component={LandingPage}/>

        </div>
    );
  }
}

export default App;