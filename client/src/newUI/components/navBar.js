import React, { Component } from 'react';
import '../css/navBar.css';
import Book from '../css/148705-essential-collection/svg/agenda.svg';
import Documents from '../css/148705-essential-collection/svg/folder-7.svg';
import Admin from '../css/148705-essential-collection/svg/users.svg';

class NavBar extends Component {
    render () {
        return (
            <div className="navBar">
                <div><img src={Admin} alt="adminIcon" /><p>Admin</p></div>
                <div><img src={Book} alt="bookIcon" /><p>Classes</p></div>
                <div><img src={Documents} alt="documentsIcon" /><p>Student Documents</p></div>
            </div>
        )
    }
}

export default NavBar;