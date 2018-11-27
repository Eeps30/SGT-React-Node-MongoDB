import React, { Component } from 'react'
import '../css/loginErrorMessage.css'

class ErrorMessage extends Component {
    render() {
		return (
			<div className="loginErrorMessage">
				<p>Teacher ID or Password is incorrect, please retry.</p>
			</div>
		)
	}
}

export default ErrorMessage;