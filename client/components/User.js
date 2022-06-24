import React, { Component } from 'react';
import { Redirect, Route, Routes, BrowserRouter, Link } from "react-router-dom";
import login from './login.js'
import Task from './task.js'


class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            redirect: null
        }
    }
    
componentDidMount(){
    fetch('http://localhost:3000/' + `${this.props.name}`)
    .then(res => res.json())
    .then(
        (result) => {
            this.setState({
                user: result, redirect: `/${this.props.name}`
            });
        })
        .catch(error => console.log(error))
}

onSubmit(e){
    const body = {task: e.target.elements.addingTask.value}
    fetch('http://localhost:3000/' + `${this.props.name}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'Application/JSON'
        },
        body: JSON.stringify(body)
      })
    .then(resp => resp.json())
    .then(data => {
      console.log(data);
    }).then()
}

render(){
    const tasks = [];
    if (this.state.user !== null){
        for (let i = 0; i < this.state.user.length; i++){
            tasks.push(<Task id = {i} tasks = {this.state.user}/>)
    }
    }
    return (
        <div id="task">
            <h1>Tasks</h1>
            {tasks}
            <form className="addTask" onSubmit={this.onSubmit.bind(this)}>
                <label> Add Task: </label>
                <input type= "text" id="addingTask" name="addingTask"></input>
                <input type="submit" value="submit"></input>
            </form>
        </div>
    )
  } 
}


export default User;