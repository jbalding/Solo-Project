import React, { Component } from 'react'
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom'
import User from './User.js'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isSubmitted: false,
            name: ""
        };
    }

    onSubmit(e) {
        e.preventDefault()
        this.setState({isSubmitted: true, name: e.target.elements.name.value});
    }
  

    render() {
        return (
            <div>
             <form onSubmit={this.onSubmit.bind(this)}>
                <label> Username: </label>
                <input type="text" id="name" name="name"></input>
                <label> Password: </label>
                <input type="password" id="password" name="password"></input>
                <input type="submit" value="Login"></input>
            </form>
            {this.state.isSubmitted && <User name={this.state.name}/>}
            </div>
        )
        }

}



export default Login;