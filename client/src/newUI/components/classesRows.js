import React, { Component } from 'react'
import '../css/classesRows.css'

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
                </tr>
            )

        });
        
        return (
           itemElements
        )
    }
}

export default ClassesRows