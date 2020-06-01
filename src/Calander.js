import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { AllSchedule } from './AllSchedule.js'

export class Calander extends Component {
    render() {
        let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

        let result = days.map((day) => {
            let tasks2 = this.props.state.filtered.map((task) => {
                if (task !== undefined && task.day === day) {
                    return task;
                }
            });
            let textComponent1 = tasks2.map((task) => {
                if (task !== undefined && task.taskKind === 'Lectures') {
                    return <p>
                        <p className="tableTitle"> Lectures:
                        <p></p>
                        </p>
                        <p>- {task.description}<input className='checking' type='checkbox'></input></p>
                    </p>
                }
                
            });
            let textComponent2 = tasks2.map((task) => {
                if (task !== undefined && task.taskKind === 'Assignments') {
                    return <p> <p className="tableTitle"> Assignments:
                    <p></p>
                    </p>
                    <p>- {task.description}<input className='checking' type='checkbox'></input></p></p>
                }

            });
            let textComponent3 = tasks2.map((task) => {
                if (task !== undefined && task.taskKind === 'Quizzes/Exams') {
                    return <p>
                        <p className="tableTitle"> Quizzes/Exams:
                        <p></p>
                        </p>
                        <p>- {task.description}<input className='checking' type='checkbox'></input></p>
                    </p>

                }

            });
            let component = (
                <td>
                    {textComponent1}
                    {textComponent2}
                    {textComponent3}
                </td>




            );
            return component;
        });
        return (
            <span>
                <main className="calander-large">
                    <div className="table-container">

                        <Table className="table2" striped bordered variant="light">
                            <thead>
                                <tr>
                                    <th scope="col">MON</th>
                                    <th scope="col">TUES</th>
                                    <th scope="col">WED</th>
                                    <th scope="col">THURS</th>
                                    <th scope="col">FRI</th>
                                    <th scope="col">SAT</th>
                                    <th scope="col">SUN</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    {result}
                                </tr>



                            </tbody>
                        </Table>
                    </div>
                </main>
                <main className="calander-view-small">
                    <AllSchedule state={this.props.state} searchCallback={this.props.searchCallback} />

                </main>
            </span>
        );
    }
}
