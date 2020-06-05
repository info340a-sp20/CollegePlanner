import React, { Component } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
export class Schedule extends Component {
    render() {
        let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        return (
            <main>
                <div className="flex-container">
                    <EachDay  days={days} task={this.props.task} state={this.props.state} />
                </div>
                
            </main>
        );
    }
}

export class EachDay extends Component {
   
      
    render() {
        let isMainPage = this.props.task + ': ';
        if (this.props.task === undefined) {
            isMainPage = '';
        }
        let rightKind = this.props.state.filtered.map((task) => {
            if (task !== undefined && task.taskKind === this.props.task) {
                return task;
            } 
            
        });

        let result = this.props.days.map((day) => {
            let tasks2 = rightKind.map((task) => {
                
                if (task !== undefined && task.day === day) {
                    return task;
                }
            });
            let textComponent = tasks2.map((task) => {
                if (task !== undefined) {
                    return <Card.Text as='div'>
                        - {task.description + '  '}<input className='checking' type='checkbox'></input>
                    </Card.Text>
                }

            });
            let component = (
                <CardGroup as='section'>
                    <Card.Body>
                        <Card.Title as='h1'>{day}</Card.Title>
                        <Card.Title as='h2'>{isMainPage}</Card.Title>
                        {textComponent}
                    </Card.Body>
                </CardGroup>

            );
            return component

        })
        return (
            result
        );
    }
}

