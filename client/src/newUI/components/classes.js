import React, { Component } from 'react'
import '../css/classes.css'
import axios from 'axios'
import { connect } from 'react-redux'
import { getClassesList } from '../../components/actions'
import ClassesRows from './classesRows';

class Classes extends Component {
    constructor(props){
        super(props)

        this.state = {
            className: '',
            description: '',
            numberOfStudents: '',
            days: '',
            classesList: []
        }
    }

    async componentDidMount() {
        await this.props.getClassesList()
        const { classes } = this.props
        console.log('Classes List: ', classes)
        this.setState({
            classesList: classes
        })
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
                        <ClassesRows classes={this.state.classesList}/>
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

function mapStateToProps(state){
    return {
        classes: state.list.items
    }
}

export default connect(mapStateToProps, { getClassesList })(Classes)