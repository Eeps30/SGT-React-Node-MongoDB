import React, { Component } from 'react'
import '../css/classesRows.css'
import axios from 'axios'
import { connect } from 'react-redux'
import { deleteClass } from '../../components/actions'

class ClassesRows extends Component {
    constructor(props){
        super(props)
    }

    render(){

        const { classes } = this.props
        const itemElements = classes.map((item, index) => {

            return (
                <tr className="classesRows" key={index}>
                    <td>{item.className}</td>
                    <td>{item.description}</td>
                    <td>{item.numberOfStudents}</td>
                    <td>{item.days}</td>
                    <button onClick={this.props.deleteClass(this, item._id)}>Delete</button>
                    <button>Edit</button>
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
        classes: state.list.items
    }
}

export default connect(mapStateToProps, { deleteClass })(ClassesRows)