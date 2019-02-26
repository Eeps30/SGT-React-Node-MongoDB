import React, { Component } from 'react'
import '../css/classes.css'
import axios from 'axios'
import { connect } from 'react-redux'
import { getClassesList } from '../../components/actions'
import ClassesRows from './classesRows'
import AddClass from './addClass'

class Classes extends Component {
    constructor(props){
        super(props)

        this.state = {
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

	render () {
		return (
			<div className="classes">
                <table>
                    <tbody>
                        <tr>
                            <th align="left">Class</th>
                            <th align="left">Description</th>
                            <th align="left">Number of Students</th>
                            <th align="left">Days</th>
                        </tr>
                        <ClassesRows classes={this.state.classesList}/>
                    </tbody>
                </table>
                <AddClass />
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