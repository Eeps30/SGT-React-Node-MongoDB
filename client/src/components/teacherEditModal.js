import React, { Component } from 'react'
import Modal from 'react-modal'

class TeacherEditModal extends Component {
    constructor(props){
        super(props)

        this.state = {
            isActive: false,
            name: '',
            course_name: '',
            class_size: '',
            errorMessage: ''
        }
    }

    componentWillMount(){
        Modal.setAppElement('body')
    }

    handleNameEntry(event){
        this.setState({
            name: event.target.value,
            errorMessage: ''
        })
    }

    handleCourseEntry(event){
        this.setState({
            course_name: event.target.value,
            errorMessage: ''
        })
    }

    handleSizeEntry(event){
        this.setState({
            class_size: event.target.value,
            errorMessage: ''
        })
    }

    toggleModal = () => {
        this.setState({
            isActive:!this.state.isActive
        })
    }

    onEdit = (props) => {
        
        const { name, course_name, class_size } = this.state

        if(name === ''){
            this.setState({
                errorMessage: 'Please Enter a Name'
            })
            return
        }

        if(course_name === ''){
            this.setState({
                errorMessage: 'Please Enter a Course'
            })
            return
        }

        if(class_size === ''){
            this.setState({
                errorMessage: 'Please Enter a Class Size'
            })
            return
        }
        

        if( isNaN(class_size) || class_size > 100 ){
            this.setState({
                errorMessage: 'Not a Valid Class Size'
            })
            return
        }

        this.props.handleEdit( name, course_name, class_size )
        this.toggleModal()
    }

    render() {

        return (
            <section>
                <button className="editButtonModal" onClick={this.toggleModal}>Edit</button>
                <Modal className="teachersEditModal" isOpen={this.state.isActive} onRequestClose={this.toggleModal}>
                    <div className="teachersEditModalText">
                        <p>Enter New Values</p>
                        <input onChange={this.handleNameEntry.bind(this)} name="name" placeholder="Name" type="text" value={this.state.name}/>
                        <input onChange={this.handleCourseEntry.bind(this)} name="course_name" placeholder="Course" type="text" value={this.state.course_name}/>
                        <input onChange={this.handleSizeEntry.bind(this)} name="class_size" placeholder="Class Size" type="text" value={this.state.class_size}/>
                        <div className="editButtons">
                            <button onClick={this.toggleModal}>Cancel</button>
                            <button className="editConfirm" onClick={this.onEdit}>Confirm</button>
                        </div>
                        <h2 className="editTeacherErrorMessage">{this.state.errorMessage}</h2>
                    </div>
                </Modal>
            </section>
        )
    }
}

export default TeacherEditModal