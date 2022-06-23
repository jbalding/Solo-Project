import React, { Component } from 'react';
import login from './login.js'
import Task from './task.js'


class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
        }
    }
   
    
componentDidMount(){
    fetch('http://localhost:3000/' + `${this.props.name}`)
    .then(res => res.json())
    .then(
        (result) => {
            this.setState({
                tasks: result,
            });
        })
        .then(console.log(this.state.tasks))
        .catch(error => console.log(error))
}

render(){
    const tasks = [];
    for (let i = 0; i < this.state.tasks.length; i++){
        tasks.push(<Task id = {i} tasks = {this.state.tasks} onError={console.log(err)}/>)
    }
    return (
       <div id="task">
        {tasks}
       </div>
    )
  } 
}


export default User;