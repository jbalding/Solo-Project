import React, { Component } from 'react'
import { Link, Route, Routes, BrowserRouter, Navigate, useParams } from 'react-router-dom'
import User from './User.js'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isSubmitted: false,
            name: "",
            redirect: null
        };
    }

    onSubmit(e) {
        e.preventDefault()
        this.setState({isSubmitted: true, name: e.target.elements.name.value, redirect: `/${e.target.elements.name.value}`})
        
    }


    render() {
        if (this.state.redirect){
            return(
            <><User name={this.state.name} /><Navigate to={this.state.redirect} /></>
            )
        }
        return (
            <div>
             <form className="LoginPage" onSubmit={this.onSubmit.bind(this)}>
                <label> Username: </label>
                <input type="text" id="name" name="name"></input>
                <label> Password: </label>
                <input type="password" id="password" name="password"></input>
                <input type="submit" value="Login"></input>
            </form>
            </div>
        )
        }

}



export default Login;