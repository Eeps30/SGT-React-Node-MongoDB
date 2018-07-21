import React, { Component } from 'react'

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

    render(){
        return (
            <div className="loginContainer">
                <div className="loginForm">
                    <h2>Please Log In</h2>
                    <form>
                        <input onChange={this.handleEmailEntry.bind(this)} name="name" placeholder="Name" type="text" value={this.state.name}/>
                        <input onChange={this.handlePasswordEntry.bind(this)} name="course" placeholder="Course" type="text" value={this.state.course}/>
                        <div>
                            <button>Log In</button>
                            <button>Clear Fields</button>
                        </div>
                        <div>
                            <p>Don't have an account yet? Sign up HERE</p>
                        </div>
                        <p>{this.state.errorMessage}</p>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginPage;