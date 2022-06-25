import React, { Component } from 'react';
import { Switch, Route, BrowserRouter, Routes, useParams, Outlet} from 'react-router-dom';
import Login from './login'
import User from './User'
import '../style.css'

function App () {
 function params(){
    let { name } = useParams()
 }

        return (
            <div className="LoginPage">
                < Routes>
                <Route path="/" element={<Login />}/>
                    <Route path=':name' element={<User />}/>
                </Routes>
            </div>  
            
        )
}


//login page for login
//directs to signup

export default App;