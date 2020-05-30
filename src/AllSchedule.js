import React, { Component } from 'react';
import { Card, CardGroup } from 'react-bootstrap';

export class AllSchedule extends Component {
    render() {
        let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        let taskTypes = ['Lectures', 'Assignments', 'Quizzes/Exams'];
        return (
            <main>
                <div className="flex-container">
                    <EachDays days={days} state={this.props.state} taskTypes={taskTypes} />
                </div>
            </main>
        );
    }
}

export class EachDays extends Component {
    render() {
        //console.log(this.props.state.tasks);
        let result = this.props.days.map((day) => {
            let tasks2 = this.props.state.tasks.map((task) => {
                if (task != undefined && task.day == day) {
                    return task;
                }
            });
            let textComponent1 = tasks2.map((task) => {
                if (task != undefined && task.taskKind == 'Lectures') {
                    return <Card.Text as='div'>
                        {task.description}
                    </Card.Text>
                }

            });
            let textComponent2 = tasks2.map((task) => {
                if (task != undefined && task.taskKind == 'Assignments') {
                    return <Card.Text as='div'>
                        {task.description}
                    </Card.Text>
                }

            });
            let textComponent3 = tasks2.map((task) => {
                if (task != undefined && task.taskKind == 'Quizzes/Exams') {
                    return <Card.Text as='div'>
                        {task.description}
                    </Card.Text>
                }

            });
            let component = (
                <CardGroup as='section'>
                    <Card.Body>
                        <Card.Title as='h1'>{day}</Card.Title>
                        <Card.Title as='h2'>Lectures</Card.Title>
                        {textComponent1}
                        <Card.Title as='h2'>Assignments</Card.Title>
                        {textComponent2}
                        <Card.Title as='h2'>Quizzes/Sections</Card.Title>
                        {textComponent3}
                    </Card.Body>
                </CardGroup>

            );
            return component
        });
        return result;
    }
}