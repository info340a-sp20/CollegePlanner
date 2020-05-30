import React, { Component } from 'react'; //import React Component
import { NavigationBar } from './NavigationBar.js';
import { InteractionFeatures } from './InteractionFeatures.js';
import { Footer } from './Footer.js';
import { Schedule } from './Schedule.js'


export class LectureManager extends Component {

    render() {
        //let lectures = 'Lectures';
        return (
            <body>
                <NavigationBar />
                <h1 className="lecture-font">Lecture Manager</h1>
                <InteractionFeatures task='Lectures' state={this.props.state} addTaskCallback={this.props.addTask}
                 deleteTaskCallback={this.props.deleteTask} searchCallback={this.props.seachCallback} />
                <Schedule task='Lectures' state={this.props.state} />
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
                <InteractionFeatures task='Assignments' state={this.props.state} addTaskCallback={this.props.addTask}
                deleteTaskCallback={this.props.deleteTask} searchCallback={this.props.seachCallback}/>
                <Schedule task='Assignments' state={this.props.state}/>
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
                <InteractionFeatures task='Quizzes/Exams' state={this.props.state} addTaskCallback={this.props.addTask}
                deleteTaskCallback={this.props.deleteTask} searchCallback={this.props.seachCallback}/>
                <Schedule task='Quizzes/Exams' state={this.props.state}/>
                <Footer />
            </body>
        );
    }

}