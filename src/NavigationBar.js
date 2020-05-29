import React, { Component } from 'react'; //import React Component

export class NavigationBar extends Component {
    render() {
        return (
            <header>
                <nav className="menu">
                    <MobileMenu />
                    <h1>Simple Online Planner</h1>
                    <NavMenus/>
                    <span id="sub-menu-small">
                        <i className="fa fa-bell"></i>
                        <i className="fa fa-cog"></i>
                        <i className="fa fa-user"></i>
                    </span>
                </nav>
            </header>
        );
    }
}

export class MobileMenu extends Component {
    render() {
        return (
            <div id="hamburger-menu">
                <i className="fa fa-bars"></i>
            </div>
        );
    }
}

export class NavMenus extends Component {
    render() {
        return (
            <div className="menu-container">
                <div id="home" aria-label="home">
                    <a href='/calanderView'>Home</a>
                </div>

                <div id="exam" aria-label="task">
                    <a href='/quizManager'>Quizzes/Exams manager</a>
                </div>

                <div id="lecture" aria-label="lecture">
                    <a href='/lectureManager'>Lecture Manager</a>
                </div>
                <div className="assignment" aria-label="exams">
                <a href='/assignmentManager'>Assignment manager</a>
                </div>
                <div className="sub-menu" aria-label="notification">
                    <p>notification</p>
                </div>
                <div className="sub-menu" aria-label="setting">
                    <p>setting</p>
                </div>
                <div className="sub-menu" aria-label="profile">
                    <p>profile</p>
                </div>
            </div>
        );
    }
}