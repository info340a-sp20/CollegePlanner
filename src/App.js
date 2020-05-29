import React, { Component } from 'react'; //import React Component
import './index.css';
import {AssignmentManager, LectureManager, QuizManager} from './Managers.js';
import schedules from './schedules.json'; //a sample list of dogs (model)

import {BrowserRouter, Route, Switch} from'react-router-dom';
import {CalanderView, MemoView} from'./MainPages.js';

// const routes = [
//   {
//     path: "/lectureManager",
//     component: LectureManager
//   },
//   {
//     path: "/memoView",
//     component: MemoView,
//   },
//   {
//     path: "/assignmentManger",
//     component: AssignmentManger
//   },
//   {
//     path: "/quizManger",
//     component: QuizManager
//   },
//   {
//     path: "/splash",
//     component: Splash
//   },
//   {
//     path: "/calanderView",
//     component: CalanderView
//   }
// ];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schedules
    };
  }

  
  
    render() {
      
    
      
      return (
        <BrowserRouter>
          <Switch>
            <Route path='/lectureManager' component={LectureManager} state={this.state} render={(props) => <LectureManager addTaskCallback = {this.addTask} />} />
            <Route path='/assignmentManager' component={AssignmentManager} />
            <Route path='/quizManager' component={QuizManager} />
            <Route path='/memoView' component={MemoView} />
            <Route path='/calanderView' component={CalanderView} />
            {/* <Route path='/splash' component={Splash} /> */}
          </Switch>
        </BrowserRouter>
        
      );
    }
}
export default App;
