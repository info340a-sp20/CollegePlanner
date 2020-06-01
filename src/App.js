import React, { Component } from 'react'; //import React Component
import './index.css';
import { AssignmentManager, LectureManager, QuizManager } from './Managers.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CalanderView, MemoView } from './MainPages.js';
import { Splash } from './Splash.js'; //a sample list of dogs (model)


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      filtered: []
    };
    this.handleChange = this.handleChange.bind(this);
  }
componentDidMount() {
    this.setState({
        filtered: this.state.tasks
    });
}

componentWillReceiveProps(nextProps) {
    this.setState({
        filtered: nextProps.tasks
    });
}
handleChange(e) {
    let currentList = [];
    let newList = [];
    if (e.target.value !== "") {
        currentList = this.state.tasks
        newList = currentList.filter(item => {
            const lc = item.description.toLowerCase();
            const filter = e.target.value.toLowerCase();
            return lc.startsWith(filter);
        });
    } else {
        newList = this.state.tasks;
    }
    this.setState({
        filtered: newList
    });
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
      this.setState({
        filtered: updatedTasks
    });
      return { tasks: updatedTasks }
    })
    
  }

  deleteTask = () => {
    this.setState((currentState) => {
      let updatedState = [];
      return { tasks: updatedState, filtered:updatedState }
    })
  }

  renderLectureManager = (routerProps) => {
    return <LectureManager {...routerProps} state={this.state} addTask={this.addTask}
      deleteTask={this.deleteTask} searchCallback={this.handleChange} />
  }
  renderAssignmentManager = (routerProps) => {
    return <AssignmentManager {...routerProps} state={this.state} addTask={this.addTask}
    deleteTask={this.deleteTask} searchCallback={this.handleChange} />
  }
  renderQuizManager = (routerProps) => {
    return <QuizManager {...routerProps} state={this.state} addTask={this.addTask}
    deleteTask={this.deleteTask} searchCallback={this.handleChange} />
  }
  renderMemo = (routerProps) => {
    return <MemoView {...routerProps} state={this.state} searchCallback={this.handleChange} />
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