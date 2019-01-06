import React, { Component } from 'react';
import '../css/navBar.css';
import Book from '../css/148705-essential-collection/svg/agenda.svg';
import Documents from '../css/148705-essential-collection/svg/folder-7.svg';
import Admin from '../css/148705-essential-collection/svg/users.svg';
import DownCaret from '../css/images/down-caret.png';

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false
        }
        this.toggleShow = this.toggleShow.bind(this);
    }

    toggleShow() {
        this.setState({show: !this.state.show})
    }

    render () {
        return (
            <div className="navBar">
                <div><img src={Admin} alt="adminIcon" /><p>Admin</p></div>
                <div onClick={this.toggleShow}>
                    <img src={Book} alt="bookIcon" />
                    <p>Classes</p>
                    <img className="downCaret" src={DownCaret}></img>
                    {this.state.show && (
                        <div show={this.state.show}>
                            <div>math</div>
                            <div>calc</div>
                            <div>science</div>
                        </div>)
                    }
                </div>
                <div><img src={Documents} alt="documentsIcon" /><p>Current Assignments</p></div>
            </div>
        )
    }
}

export default NavBar;