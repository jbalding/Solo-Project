import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './login'


class App extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="LoginPage">
                <button type='button'>Login</button>
            </div>  
        )
    }
}


//login page for login
//directs to signup

export default App;