import React, { Component } from 'react';
import { Switch, Route, BrowserRouter, Routes } from 'react-router-dom';
import Login from './login'


class App extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="LoginPage">
                < Login />
            </div>  
        )
    }
}


//login page for login
//directs to signup

export default App;