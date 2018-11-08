import React, { Component } from 'react';
import '../css/navBar.css';

class NavBar extends Component {
    render () {
        return (
            <div className="navBar">
                <div>Admin</div>
                <div>Tables</div>
                <div>Student Documents</div>
                <div>row4</div>
            </div>
        )
    }
}

export default NavBar;