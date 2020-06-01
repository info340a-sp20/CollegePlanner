import React, { Component } from 'react'; //import React Component
import { NavLink } from 'react-router-dom';



export class NavigationBar extends Component {
    render() {
        return (
            <header>
                <nav className="menu">
                    <h1>Simple Online Planner</h1>
                    <NavMenus />
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



// <BrowserRouter>
//   <Switch>
//     <Route path='/lectureManager' component={LectureManager} state={this.state} render={(props) => <LectureManager addTaskCallback = {this.addTask} />} />
//     <Route path='/assignmentManager' component={AssignmentManager} />
//     <Route path='/quizManager' component={QuizManager} />
//     <Route path='/memoView' component={MemoView} />
//     <Route path='/calanderView' component={CalanderView} />
//     {/* <Route path='/splash' component={Splash} /> */}
//   </Switch>
// </BrowserRouter>





// export class MobileMenu extends Component {

//     render() {
//         return (
//             <div id="hamburger-menu" onClick={this.handleClick}>
//                 <i className="fa fa-bars"></i>
//             </div>
//         );
//     }
// }

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