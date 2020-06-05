import React, { Component } from 'react'; //import React Component
import { NavLink } from 'react-router-dom';



export class NavigationBar extends Component {
    render() {
        return (
            <header>
                <nav className="menu">
                    <h1>Simple Online Planner</h1>
                    <NavMenus handleSignOut={this.props.handleSignOut}/>
                   
                </nav>

            </header>
        );
    }
}


export class NavMenus extends Component {
    render() {
        return (

            <div className="menu-container">
                <div id="home" aria-label="home">
                    <NavLink to="/MemoView">Home</NavLink>
                    {/* <a href='/MemoView'>Home</a> */}
                </div>

                <div id="exam" aria-label="task">
                    <NavLink to='/quizManager'>Quizzes/Exams manager</NavLink>
                    {/* <a href='/quizManager'>Quizzes/Exams manager</a> */}
                </div>

                <div id="lecture" aria-label="lecture">
                <NavLink to='/lectureManager'>Lecture Manager</NavLink>

                    {/* <a href='/lectureManager'>Lecture Manager</a> */}
                </div>
                <div className="assignment" aria-label="exams">
                <NavLink to='/assignmentManager'>Assignment manager</NavLink>

                    {/* <a href='/assignmentManager'>Assignment manager</a> */}
                </div>
                
                <div className="sub-menu" aria-label="profile">
                    <button onClick={this.props.handleSignOut}>Logout</button>
                </div>

            </div>
        );
    }
}