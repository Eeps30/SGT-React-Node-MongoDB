import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { addNewClass } from '../../components/actions'
import '../css/classes.css'

class AddNewClass extends Component {
    constructor(props){
        super(props)
        this.state = {
            className: '',
            description: '',
            numberOfStudents: '',
            days: '',
        }
        this.baseState = this.state
    }

    handleClassNameChange(event) {
        this.setState({
            className: event.target.value
        })
    }

    handleDescriptionChange(event) {
        this.setState({
            description: event.target.value
        })
    }

    handleNumOfStudentsChange(event) {
        this.setState({
            numberOfStudents: event.target.value
        })
    }

    handleDaysChange(event) {
        this.setState({
            days: event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault()
        axios.post('/api/addNewClass', {
            className: this.state.className,
            description: this.state.description,
            numberOfStudents: this.state.numberOfStudents,
            days: this.state.days
          })
          .then(() => {
              console.log('Class Added')
              this.setState({
                className: '',
                description: '',
                numberOfStudents: '',
                days: ''
              })
          })
          .catch(function (error) {
            console.log(error)
            return false
          });
    }

    render() {
        return (
            <React.Fragment>
                <h3>Add Class</h3>
                <input type="text" value={this.state.className} onChange={this.handleClassNameChange.bind(this)} placeholder="Class Name"></input>
                <input type="text" value={this.state.description} onChange={this.handleDescriptionChange.bind(this)} placeholder="Description"></input>
                <input type="text" value={this.state.numberOfStudents} onChange={this.handleNumOfStudentsChange.bind(this)} placeholder="Number of Students"></input>
                <input type="text" value={this.state.days} onChange={this.handleDaysChange.bind(this)} placeholder="Days"></input>
				<button onClick={this.handleSubmit.bind(this)}>Add Class</button>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state){
    return {
        classes: state.list.items
    }
}

export default connect(mapStateToProps, { addNewClass })(AddNewClass)