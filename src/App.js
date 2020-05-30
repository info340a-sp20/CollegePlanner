import React, { Component } from 'react'; //import React Component
import './index.css';
import { Managers, AssignmentManager, LectureManager, QuizManager } from './Managers.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CalanderView, MemoView } from './MainPages.js';
import { Splash } from './Splash.js'; //a sample list of dogs (model)


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        tasks: []
    };
}

addTask = (newDescription, day, taskKind) => {
    this.setState((currentState) => {
        let newTask = {
            day: day,
            description: newDescription,
            taskKind: taskKind
        }
        let updatedTasks = currentState.tasks.map((task) => {
            return task;
        })
        updatedTasks.push(newTask);
        return { tasks: updatedTasks }
    })
}
renderLectureManager = (routerProps) => {
  return <LectureManager {...routerProps} state={this.state} addTask={this.addTask} />
}

render() {
  return (
      <BrowserRouter>
          <Switch>
              <Route path='/lectureManager' render={this.renderLectureManager} />

              <Route path='/assignmentManager' component={AssignmentManager} />
              <Route path='/quizManager' component={QuizManager} />
              <Route path='/memoView' component={MemoView} />
              <Route path='/calanderView' component={CalanderView} />
              <Route path='/' component={Splash} />
          </Switch>
      </BrowserRouter>
  );
}
}
export default App;