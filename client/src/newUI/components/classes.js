import React, { Component } from 'react'
import '../css/classes.css'

class Classes extends Component {
        render () {
                return (
                        <div className="classes">
                                <table>
                                        <tr>
                                                <th>Class</th>
                                                <th>Description</th>
                                                <th>Number of Students</th>
                                                <th>Days</th>
                                        </tr>
                                </table>
                                <button>Add Class</button>
                        </div>
                )
        }
}

export default Classes