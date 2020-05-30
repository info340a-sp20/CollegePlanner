import React, { Component } from 'react'; //import React Component
import { NavigationBar } from './NavigationBar.js';
import { InteractionFeatures } from './InteractionFeatures.js';
import { Footer } from './Footer.js';
import { Schedule } from './Schedule.js'


export class LectureManager extends Component {

    render() {
        let lectures = 'Lectures';
        return (

            <body>
                <NavigationBar />
                <h1 className="lecture-font">Lecture Manager</h1>
                <InteractionFeatures task='Lectures and sections' state={this.props.state} addTaskCallback={this.props.addTask} />
                <Schedule task={lectures} state={this.props.state} />
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
                <InteractionFeatures task='Assignments' />
                <Schedule task='Assignments' state={this.state} />
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
                <InteractionFeatures task='Quizzes and Exams' />
                <Schedule task='Quizzes/Exams' />
                <Footer />
            </body>
        );
    }

}