import React, { Component } from 'react'
import '../css/classes.css'
import axios from 'axios'

class Classes extends Component {
    constructor(props){
        super(props)

        this.state = {
            className: '',
            description: '',
            numberOfStudents: '',
            days: ''
        }
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
          })
          .catch(function (error) {
            console.log(error)
            return false
          });
    }

	render () {
		return (
			<div className="classes">
                <table>
                    <tbody>
                        <tr>
                            <th>Class</th>
                            <th>Description</th>
                            <th>Number of Students</th>
                            <th>Days</th>
                        </tr>
                    </tbody>
                </table>
                <input type="text" onChange={this.handleClassNameChange.bind(this)} placeholder="Class Name"></input>
                <input type="text" onChange={this.handleDescriptionChange.bind(this)} placeholder="Description"></input>
                <input type="text" onChange={this.handleNumOfStudentsChange.bind(this)} placeholder="Number of Students"></input>
                <input type="text" onChange={this.handleDaysChange.bind(this)} placeholder="Days"></input>
				<button onClick={this.handleSubmit.bind(this)}>Add Class</button>
			</div>
		)
	}
}

export default Classes