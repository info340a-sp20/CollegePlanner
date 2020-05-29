import React, { Component } from 'react';
export class Calander extends Component {
    render() {
        return (
            <span>
                <main class="calander-large">
                    <div class="table-container">
                        <table class="table table-bordered">
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
                                    <td>Assignment :
                            CSE 373 : P2 DUE </td>
                                    <td> Project :
                            INFO 340 : Static mock-up due</td>
                                    <td>none</td>
                                    <td> Assignment :
                            CSE 373 : P2 DUE</td>
                                    <td>Exam/quiz :
                            CSE 373 : midterm(8;30am)</td>
                                    <td>none</td>
                                    <td>none</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </main>
                <main class="calander-view-small">

                    <div class="flex-container">

                        <section class="mon">
                            <h1>Monday</h1>
                            <p>Assignment :
                            CSE 373 : P2 DUE
                            </p>
                            <p>Project :
                            CSE 373 : exercise 2
                             </p>
                            <p>Exam/quiz :
                            JAPAN 203 : ch22 adj vocab quiz
                             </p>
                        </section>
                        <section class="tues">
                            <h1>Tuesday</h1>
                            <p>Project :
                            INFO 340 : Static mock-up due
                            </p>
                        </section>
                        <section class="wed">
                            <h1>Wednesday</h1>
                            <p>none</p>
                        </section>
                        <section class="thurs">
                            <h1>Thursday</h1>
                            <p>Assignment :
                            CSE 373 : P2 DUE
                            </p>
                            <p>Project :
                            CSE 373 : exercise 2
                            </p>
                            <p>Exam/quiz :
                            JAPAN 203 : ch22 adj vocab quiz
                            </p>
                        </section>
                        <section class="fri">
                            <h1>Friday</h1>
                            <p>Exam/quiz :
                            CSE 373 : midterm(8;30am)
                            </p>
                        </section>
                        <section class="sat">
                            <h1>Saturday</h1>
                            <p>none</p>
                        </section>
                        <section class="sun">
                            <h1>Sunday</h1>
                            <p>none</p>
                        </section>
                    </div>
                </main>
            </span>
        );
    }
}
