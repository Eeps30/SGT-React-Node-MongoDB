import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../css/loginPage.css'
import axios from 'axios'

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
              console.log(response)
          })
          .catch(function (error) {
            return false
          });
    }

    render(){
        return (
            <div className="loginContainer">
                <div className="loginForm">
                    <h2>Please Log In</h2>
                    <form>
                        <input onChange={this.handleEmailEntry.bind(this)} name="name" placeholder="Email" type="text" value={this.state.name}/>
                        <input onChange={this.handlePasswordEntry.bind(this)} name="course" placeholder="Password" type="text" value={this.state.course}/>
                        <div>
                            <button onClick={this.handleSubmit.bind(this)}>Log In</button>
                        </div>
                        <div>
                            <p>Don't have an account yet? Sign up <Link to="/signupPage">HERE</Link></p>
                        </div>
                        <p>{this.state.errorMessage}</p>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginPage;