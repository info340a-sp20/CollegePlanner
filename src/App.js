import React, { Component } from 'react'; //import React Component
import './index.css';
import { AssignmentManager, LectureManager, QuizManager } from './Managers.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CalanderView, MemoView } from './MainPages.js';
import { Splash } from './Splash.js'; //a sample list of dogs (model)
import firebase from 'firebase/app';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      filtered: [],
      user: null

    };
    this.handleChange = this.handleChange.bind(this);
  }
  uiConfig = {
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID

    ],
    signInFlow: 'popup',
  };
  componentDidMount() {
    this.authUnSubFunction = firebase.auth().onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) { //if exists, then we logged in
        console.log("Logged in as", firebaseUser.email);
        this.setState({ user: firebaseUser })
      } else {
        console.log("Logged out");
        this.setState({ user: null })
      }
    })
    this.setState({
      filtered: this.state.tasks
    });
  }

  componentWillUnmount() {
    this.authUnSubFunction();
  }

  handleSignOut = () => {
    firebase.auth().signOut()
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
      return { tasks: updatedState, filtered: updatedState }
    })
  }

  renderLectureManager = (routerProps) => {
    return <LectureManager {...routerProps} state={this.state} addTask={this.addTask}
      deleteTask={this.deleteTask} searchCallback={this.handleChange} handleSignOut={this.handleSignOut} />
  }
  renderAssignmentManager = (routerProps) => {
    return <AssignmentManager {...routerProps} state={this.state} addTask={this.addTask}
      deleteTask={this.deleteTask} searchCallback={this.handleChange} handleSignOut={this.handleSignOut} />
  }
  renderQuizManager = (routerProps) => {
    return <QuizManager {...routerProps} state={this.state} addTask={this.addTask}
      deleteTask={this.deleteTask} searchCallback={this.handleChange} handleSignOut={this.handleSignOut} />
  }
  renderMemo = (routerProps) => {
    return <MemoView {...routerProps} state={this.state} searchCallback={this.handleChange} 
    handleSignOut={this.handleSignOut} userName={this.state.user.displayName}/>
  }
  renderCalanderView = (routerProps) => {
    return <CalanderView {...routerProps} state={this.state} handleSignOut={this.handleSignOut} 
    userName={this.state.user.displayName}/>
  }

  render() {
    let content = null;
    if (!this.state.user) { //signed out
      content = (
        <span>
          <BrowserRouter>
            
              <Route path='/' component={Splash} />
            
          </BrowserRouter>
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
          
        </span>

      )
    }
    else { //signed in
      content = (
        <span>
          
          
          <BrowserRouter>
            <Switch>
              <Route path='/lectureManager' render={this.renderLectureManager} />
              <Route path='/assignmentManager' render={this.renderAssignmentManager} />
              <Route path='/quizManager' render={this.renderQuizManager} />
              
              <Route path='/calanderView' render={this.renderCalanderView} />
              <Route path='/' render={this.renderMemo} />
            </Switch>
          </BrowserRouter>
        </span>
      )
    }
    return (
      <span>
        {this.state.errorMessage &&
          <p className="alert alert-danger">{this.state.errorMessage}</p>
        }
        {content}

      </span>
    );
  }
}
export default App;