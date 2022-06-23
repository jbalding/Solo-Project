import React, { Component } from 'react';
import User from './User.js'


class Task extends Component {
    render(){
        return (
            <div >
                <input type="checkbox"/>
                {this.props.tasks[this.props.id]}
            </div>
        )
    }
}

export default Task;