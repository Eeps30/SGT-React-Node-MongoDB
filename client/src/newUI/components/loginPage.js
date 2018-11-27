import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../css/loginPage.css'
import axios from 'axios'
import Books from '../css/images/download.png'
import ErrorMessage from './errorMessage'

class LoginPage extends Component {
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: '',
            errorMessage: '',
            showErrorMessage: false
        }
    }

    handleEmailEntry(event){
        this.setState({
            email: event.target.value
        })
    }

    handlePasswordEntry(event){
        this.setState({
            password: event.target.value
        })
    }

    resetErrorMessage(){
        this.setState({
            showErrorMessage: false
        })
    }

    handleSubmit(event){
        event.preventDefault()
        axios.post('/api/users/login', {
            email: this.state.email,
            password: this.state.password
          })
          .then((response) => {
              if(response.data === ""){
                  this.setState({
                      showErrorMessage: true
                  })
              }else{
                  this.props.history.push('/landing')
              }
          })
          .catch(function (error) {
            return false
          });
    }

    render(){
        return (
            <div className="loginContainer">
        	<div className="loginForm">
                    <img src={Books} alt="booksIcon"/>
                    <h2>Welcome to Student Grade Table</h2>
                    <p>Login with your given <strong>Teacher ID</strong></p>
                    <form>
                        <input onChange={this.handleEmailEntry.bind(this)} name="name" placeholder="TeacherID" type="text" value={this.state.name}/>
                        <input 
                        	onChange={this.handlePasswordEntry.bind(this)} 
				onClick={this.resetErrorMessage.bind(this)}
				name="course" 
				placeholder="Password" 
				type="password" 
				value={this.state.course}
                        />
                        <div>
                        {this.state.showErrorMessage ? <ErrorMessage /> : true}
                            <button className="loginButton" onClick={this.handleSubmit.bind(this)}>Log In</button>
                        </div>
                        <div>
                            <p className="createAccount"><Link to="/signup">Create Account</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginPage;