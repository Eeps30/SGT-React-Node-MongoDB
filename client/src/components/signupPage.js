import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../css/signupPage.css'
import axios from 'axios'

class SignupPage extends Component {
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
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

    handleConfirmPassword(event){
        this.setState({
            confirmPassword: event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault()
        axios.post('/api/newUser', {
            email: this.state.email,
            password: this.state.password
          })
          .then((response) => {
            console.log('success');
            this.props.history.push('/');
          })
          .catch(function (error) {
            console.log(error);
            return false
          });
    }

    render(){
        return(
            <div className="signupContainer">
                <div className="signupForm">
                    <h2>Create an Account</h2>
                    <form>
                        <input onChange={this.handleEmailEntry.bind(this)} name="name" placeholder="Email" type="text" value={this.state.email}/>
                        <input onChange={this.handlePasswordEntry.bind(this)} name="course" placeholder="Password" type="text" value={this.state.password}/>
                        <input onChange={this.handleConfirmPassword.bind(this)} name="course" placeholder="Confirm Password" type="text" value={this.state.confirmPassword}/>
                        <div>
                            <button className="signupButton" onClick={this.handleSubmit.bind(this)}>Create Account</button>
                        </div>
                        <div>
                            <p className="signinButton"><Link to="/">Sign In</Link></p>
                        </div>
                        <p>{this.state.errorMessage}</p>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignupPage;