import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../css/signupPage.css'

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

    render(){
        return(
            <div className="signupContainer">
                <div className="signupForm">
                    <h2>Create an Account</h2>
                    <form>
                        <input onChange={this.handleEmailEntry.bind(this)} name="name" placeholder="Email" type="text" value={this.state.email}/>
                        <input onChange={this.handlePasswordEntry.bind(this)} name="course" placeholder="Password" type="text" value={this.state.password}/>
                        <input onChange={this.handlePasswordEntry.bind(this)} name="course" placeholder="Confirm Password" type="text" value={this.state.confirmPassword}/>
                        <div>
                            <button>Confirm</button>
                        </div>
                        <div>
                            <p>Already have an account? Log In <Link to="/">HERE</Link></p>
                        </div>
                        <p>{this.state.errorMessage}</p>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignupPage;