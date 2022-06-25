import React, { Component, useState, useEffect } from 'react';
import { Redirect, Route, Routes, BrowserRouter, Link, useParams, useSearchParams} from "react-router-dom";
import Task from './task.js'

function User() {
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const[items, setItems] = useState([])
   
    const params = useParams();
    const name = params.name;

let onSubmit = (e) => {
    e.preventDefault()
    const body = {task: e.target.elements.addingTask.value}
            fetch(`http://localhost:3000/${params.name}`, {
                method: 'PATCH',
                headers: {
                  'Content-Type': 'Application/JSON'
                },
                body: JSON.stringify(body)
              })
            .then(resp => resp.json())
            .then(result => {
                setItems(result);
            }).then(e.target.elements.addingTask.value="")
}


useEffect(() => {
    fetch(`http://localhost:3000/${params.name}`)
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setItems(result)
            },
            (error) => {
                setIsLoaded(true);
                setError(error)
            }
        )
},[])

if (error) {
    return <div>Error: {error.message}</div>;
} else if (!isLoaded) {
    return <div>Loading...</div>;
} else {
    return (
        <><><div>
            <h2> Tasks </h2>
        </div><div>
                {items.map(item => (
                    <div>
                        <input type="checkbox" />
                        {item}
                    </div>
                ))}
            </div></><form className="addTask" onSubmit={onSubmit}>
                <label> Add Task: </label>                <input type="text" id="addingTask" name="addingTask"></input>
                <input type="submit" value="submit"></input>
            </form></>
    );
  }
}


export default User;