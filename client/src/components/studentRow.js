import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getStudentList, deleteStudent, editStudent, getSelectedStudentData } from '../components/actions'
import StudentModal from './studentModal'


class StudentRow extends Component {
    
    async componentDidMount() {
        await this.props.getStudentList()
    }

    async handleDelete(id){
        console.log('student being deleted: ', id)
        await this.props.deleteStudent(id)
        this.props.getStudentList()
    }

    editClicked = (id) => {
        this.props.editClickHandler(id);
    }

    render(){

        const { students } = this.props
        console.log('List of students', students);
        const itemElements = students.map((item, index) => {

            return (
                <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.course}</td>
                    <td>{item.grade}</td>
                    <button className="editButtonModal" onClick={this.editClicked.bind(this, item.id)}>Edit</button>
                    <td><StudentModal handleDelete={this.handleDelete.bind(this, item._id)}/></td>
                </tr>
            )

        });
        
        return (
           itemElements
        )
    }
}

function mapStateToProps(state){
    return {
        students: state.list.items
    }
}

export default connect(mapStateToProps, {getStudentList, deleteStudent, editStudent, getSelectedStudentData})(StudentRow);