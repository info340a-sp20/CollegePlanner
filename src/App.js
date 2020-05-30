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
  search = (search) => {
    
    this.setState((currentState) => {
      let original = [];
      if(search == '') {
        original = currentState.tasks.map((task) => {
          return task;
        })
      }
      
      let updatedTasks = currentState;

      if (search != '') {
        updatedTasks = currentState.tasks.filter((task) => {
          let lowerDescription = task.description.toLowerCase();
          let filter = search.toLowerCase();
          return lowerDescription.startsWith(filter);
        });
      } else {
        updatedTasks = original;
      }
      search = search.toLowerCase();

      return { tasks: updatedTasks }
    })

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

  deleteTask = () => {
    this.setState((currentState) => {
      let updatedState = [];
      return { tasks: updatedState }
    })
  }

  renderLectureManager = (routerProps) => {
    return <LectureManager {...routerProps} state={this.state} addTask={this.addTask}
      deleteTask={this.deleteTask} seachCallback={this.search} />
  }
  renderAssignmentManager = (routerProps) => {
    return <AssignmentManager {...routerProps} state={this.state} addTask={this.addTask}
    deleteTask={this.deleteTask} seachCallback={this.search} />
  }
  renderQuizManager = (routerProps) => {
    return <QuizManager {...routerProps} state={this.state} addTask={this.addTask}
    deleteTask={this.deleteTask} seachCallback={this.search} />
  }

  renderMemo = (routerProps) => {
    return <MemoView {...routerProps} state={this.state} />
  }
  renderCalanderView = (routerProps) => {
    return <CalanderView {...routerProps} state={this.state} />
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/lectureManager' render={this.renderLectureManager} />
          <Route path='/assignmentManager' render={this.renderAssignmentManager} />
          <Route path='/quizManager' render={this.renderQuizManager} />
          <Route path='/memoView' render={this.renderMemo} />
          <Route path='/calanderView' render={this.renderCalanderView} />
          <Route path='/' component={Splash} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;