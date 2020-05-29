import React, { Component } from 'react';

export class InteractionFeatures extends Component {
    render() {
        return (
            <div className="form">
                <AddTasks />
            </div>
        //     <div className="form">
        //         

        //             <select className="selectpicker" placeholder="Select the day">
        //                 <option>Monday</option>
        //                 <option>Tuesday</option>
        //                 <option>Wednesday</option>
        //                 <option>Thursday</option>
        //                 <option>Friday</option>
        //                 <option>Saturday</option>
        //                 <option>Sunday</option>

        //             </select>



        //             <button type="button" id="add-lecture" className="btn btn-primary">Add Lectures/Sections</button>
        //             <button type="button" id="read-csv-student1" className="btn btn-warning">Read csv data file -student1</button>
        //             <span>
        //                 <input id="searchbar" type="text" onkeyup="search_task()" name="search" placeholder="Search...">
        //     </span>
        //                 <button type="button" id="delete-lecture" class="btn btn-secondary">Delete All Lectures/Sections</button>

        
        // </div>
        );


    }
}

export class AddTasks extends Component {
    render() {
        return (
            <div className="input-group mb-3">
                <input type="text" className="form-control" aria-label="Text input with dropdown button"
                         placeholder="Add lectures or sections"></input>
                <SelectDays />
            </div>
        );
    }
}

export class SelectDays extends Component {
    render() {
        return (
            <select className="selectpicker" placeholder="Select the day">
                <option>Monday</option>
                <option>Tuesday</option>
                <option>Wednesday</option>
                <option>Thursday</option>
                <option>Friday</option>
                <option>Saturday</option>
                <option>Sunday</option>
            </select>
        );
    }
}

export class Buttons extends Component {
    render() {
        return (
            <button type="button" id="add-lecture" className="btn btn-primary">Add Lectures/Sections</button>
            <button type="button" id="delete-lecture" class="btn btn-secondary">Delete All Lectures/Sections</button>
        );
    }
}