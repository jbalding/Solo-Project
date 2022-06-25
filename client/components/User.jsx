import React, { Component, useState, useEffect } from 'react';
import { Redirect, Route, Routes, BrowserRouter, Link, useParams, useSearchParams} from "react-router-dom";
import Task from './task.js'

function User() {
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const[items, setItems] = useState([])
   
    const params = useParams();
    const name = params.name;

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
        <div>
             <ul>
        {items.map(item => (
          <li>
            {item}
          </li>
        ))}
      </ul>
        </div>
    );
  }
}
// class User extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             error: null,
//             isLoaded: false,
//             user: [],
//             name: this.props.name,
//         };
//     }

//     onSubmit(e)  {
//         const body = {task: e.target.elements.addingTask.value}
//         fetch('http://localhost:3000/' + `${this.props.name}`, {
//             method: 'PATCH',
//             headers: {
//               'Content-Type': 'Application/JSON'
//             },
//             body: JSON.stringify(body)
//           })
//         .then(resp => resp.json())
//         .then(result => {
//             this.setState({user: result});
//         })
//         .catch(error => console.log(error))
//     }
    
// componentDidMount(){
//     if(this.props.name){
//         fetch('http://localhost:3000/' + `${this.props.name}`)
//         .then(res => res.json())
//         .then(
//             (result) => {
//                 this.setState({
//                     isLoaded: true,
//                     user: result,
//                 });
//             },
//             (error) => {
//                 this.setState({
//                     error,
//                     isLoaded: true
//                 });
//             }
//         )
//     }
// }

// render() {
//     const { error, isLoaded, user } = this.state;
//     if (error) {
//       return <div>Error: {error.message}</div>;
//     } else if (!isLoaded) {
//       return <div>Loading...</div>;
//     } else {
//       return (
//         <ul>
//           {user.map(user => (
//             <li key={user.id}>
//               {user}
//             </li>
//           ))}
//         </ul>
//       );
//     }
//   }
// }

// render(){
//     console.log("this.props", this.props)
//     console.log("this.state", this.state)
//     const tasks = [];
//     if (this.state.user != false){
//         for (let i = 0; i < this.state.user.length; i++){
//             tasks.push(<Task id = {i} tasks = {this.state.user}/>)
//     }
//     }
//     return (
       
//         <div id="task">
//             <h1>Tasks</h1>
//             {tasks}
//             <form className="addTask" onSubmit={this.onSubmit.bind(this)}>
//                 <label> Add Task: </label>
//                 <input type= "text" id="addingTask" name="addingTask"></input>
//                 <input type="submit" value="submit"></input>
//             </form>
//         </div>
//     )
//   } 
//}


export default User;