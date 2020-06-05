import React, { Component } from 'react'; //import React Component
import './index.css';
import { AssignmentManager, LectureManager, QuizManager } from './Managers.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CalanderView, MemoView } from './MainPages.js';
import firebase from 'firebase/app';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      filtered: [],

    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    let tasksRef = firebase.database().ref(this.props.fbuserkey + '/tasks');


    tasksRef.on('value', (snapshot) => {
      let value = snapshot.val();
      let newTasks = [];
      if (value) {
        let taskIds = Object.keys(value);
        newTasks = taskIds.map((taskId) => {
          return { id: taskId, ...value[taskId] }
        })
      }
      this.setState({ tasks: newTasks, filtered:newTasks })
    })

    // this.setState({
    //   filtered: this.state.tasks
    // });
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
      let tasksRef = firebase.database().ref(this.props.fbuserkey + '/tasks');
      tasksRef.push(newTask);

      updatedTasks.push(newTask);

      this.setState({
        filtered: updatedTasks
      });
        return { tasks: updatedTasks }
    })

  }

  deleteTask = (kind) => {
    let tasksRef = firebase.database().ref(this.props.fbuserkey + '/tasks');
    tasksRef.once('value', (snapshot) => {
      let value = snapshot.val();
      
        let taskIds = Object.keys(value);
        taskIds.forEach(element => {
          let a = tasksRef.child(element).child('taskKind');
          a.once('value', (snapshot) => {
            let value = snapshot.val();
            a = value;
          });
          console.log(a);
          if(a.startsWith(kind)) {
            
            console.log(kind);
            console.log(element);
            tasksRef.child(element).remove();
            
          }

        });
      
        
      
        
      
    })
    // this.setState((currentState) => {
    //   let updatedState = currentState.tasks.map((task) => {
    //     if(task.taskKind != kind) {
    //       return task;
    //     }
    //   })
    //   return { tasks: updatedState, filtered: updatedState }
    // })
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
      handleSignOut={this.handleSignOut} userName={this.props.user.displayName} />
  }
  renderCalanderView = (routerProps) => {
    return <CalanderView {...routerProps} state={this.state} handleSignOut={this.handleSignOut}
      userName={this.props.user.displayName} />
  }

  render() {
    let content = null;
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
    // }
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