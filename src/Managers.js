import React, { Component } from 'react'; //import React Component
import {NavigationBar} from './NavigationBar.js';
import {InteractionFeatures} from './InteractionFeatures.js';
import {Footer} from './Footer.js';
import {Schedule} from './Schedule.js'
import schedules from './schedules.json'; //a sample list of dogs (model)
import lodash from 'lodash';








export class LectureManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
          tasks : []
        };
      }



      
    addTask = (newDescription, day, taskKind) => {
        this.setState((currentState) => {
            let newTask = {
              day: day,
              description: newDescription,
              taskKind: taskKind
            }
            //currentState.tasks.push(newTask); //add task, better to copy array
           
            let updatedTasks = currentState.tasks.map((task) => {
              
             return task;
            })
            updatedTasks.push(newTask);
            
            
            console.log(currentState);
            return {tasks: updatedTasks}
            
          })
          
      }
      
    render() {
        return (
            <body>
                <NavigationBar />
                <h1 className="lecture-font">Lecture Manager</h1>
                <InteractionFeatures task='Lectures and sections' state={this.props.state} addTaskCallback={this.addTask}/>
                <Schedule task='Lectures' state={this.state}/>
                <Footer />
            </body>
        );
    }

}

export class AssignmentManager extends Component {
    render() {
        return (
            <body>
                <NavigationBar />
                <h1 className="lecture-font">Assignment Manager</h1>
                <InteractionFeatures task='Assignments'/>
                <Schedule task='Assignments'/>
                <Footer />
            </body>
        );
    }

}

export class QuizManager extends Component {
    render() {
        return (
            <body>
                <NavigationBar />
                <h1 className="lecture-font">Quizzes/Exams Manager</h1>
                <InteractionFeatures task='Quizzes and Exams'/>
                <Schedule task='Quizzes/Exams'/>
                <Footer />
            </body>
        );
    }

}
