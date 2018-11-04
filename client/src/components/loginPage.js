import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import '../css/loginPage.css'
import axios from 'axios'
import Books from '../css/images/download.png'

class LoginPage extends Component {
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: '',
            errorMessage: ''
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

    handleSubmit(event){
        event.preventDefault()
        axios.post('/api/users/login', {
            email: this.state.email,
            password: this.state.password
          })
          .then((response) => {
              if(response.data === ""){
                  console.log('User not found')
              }else{
                  this.props.history.push('/studentTable')
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
                    <img src={Books}/>
                    <h2>Welcome to Student Grade Table</h2>
                    <p>Login with your given <strong>Teacher ID</strong></p>
                    <form>
                        <input onChange={this.handleEmailEntry.bind(this)} name="name" placeholder="TeacherID" type="text" value={this.state.name}/>
                        <input onChange={this.handlePasswordEntry.bind(this)} name="course" placeholder="Password" type="text" value={this.state.course}/>
                        <div>
                            <button className="loginButton" onClick={this.handleSubmit.bind(this)}>Log In</button>
                        </div>
                        <div>
                            <p className="createAccount"><Link to="/signupPage">Create Account</Link></p>
                        </div>
                        <p>{this.state.errorMessage}</p>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginPage;