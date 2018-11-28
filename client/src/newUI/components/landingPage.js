import React, { Component } from 'react'
import Navbar from './navBar'
import Classes from './classes'
import '../css/landingPage.css'

class LandingPage extends Component {
        render() {
                return ( 
                        <div className="container">
                                <Navbar />
                                <Classes />
                        </div>
                )
        }
}

export default LandingPage;