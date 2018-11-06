import React, { Component } from 'react';
import '../css/navBar.css';

class NavBar extends Component {
    render () {
        return (
            <div className="navBar">
                <div>row1</div>
                <div>row2</div>
                <div>row3</div>
                <div>row4</div>
            </div>
        )
    }
}

export default NavBar;