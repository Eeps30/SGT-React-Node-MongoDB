import React, { Component } from 'react';
import StudentRow from './studentRow';
import Header from '../components/header';
import AddStudentForm from '../components/addStudentForm';
import { Link } from 'react-router-dom';

class StudentTable extends Component {

    render(){
        return(
            <div>
                <Header/>
                <table>
                    <tbody>
                        <tr>
                            <td>Student Name</td>
                            <td>Student Course</td>
                            <td>Student Grade</td>
                            <td>Operations</td>
                        </tr>
                        <StudentRow/>
                    </tbody>
                </table>
                <AddStudentForm/>
                <Link className="btn" to="/teacherTable">View Teachers</Link>
            </div>
        )
    }
}

export default StudentTable