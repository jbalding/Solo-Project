import React, { Component } from 'react';
import { Switch, Route, BrowserRouter, Routes, useParams, Outlet} from 'react-router-dom';
import Login from './login'
import User from './User'


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
                <Outlet/>
            </div>  
            
        )
}


//login page for login
//directs to signup

export default App;