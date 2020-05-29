import React, { Component } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
export class Schedule extends Component {
    render() {
        let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

        return (
            <main>
                <div className="flex-container">
                    <EachDay days={days} task={this.props.task} state={this.props.state} />
                </div>

            </main>
        );
    }
}

export class EachDay extends Component {
    render() {
        

        let isMainPage = this.props.task + ': ';
        if (this.props.task == undefined) {
            isMainPage = '';
        }

        

        let result = this.props.days.map((day) => {
            
            let component = (
                <CardGroup as='section'>
                    <Card.Body>
                    <Card.Title as='h1'>{day}</Card.Title>
                    <Card.Title as='h2'>{isMainPage}</Card.Title>
                    <Card.Text as='div'>
                        
                    </Card.Text>
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

