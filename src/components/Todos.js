import { getTodos } from "../services/todos-api"
import { useState, useEffect } from "react"
import Create from "./CreateTodo"
import { Link } from "react-router-dom";


export default function Todos() {
    const [todos, setTodos] = useState([])
    useEffect( () => {
        getTodos() // calling the function to get the data
        .then( res => setTodos(res.data))
    }, [])
    console.log(todos)
    return(
        <div className='todo'>
            <h1>ToDo List</h1>
            <div className='create-form'>
                <Create />
            </div>
            <ul className='list'>
            {todos.map((todo) =>{
                return (
                    <div>
                        
                       <li>
                       <Link to={`/${todo._id}`}>{todo.description}
                        
                        </Link>
                        {/* <a href={`/${todo._id}`}>{todo.description}</a> */}
                        </li>
                        {/* <div>
                        <li><a href={`/${todo._id}`}>{todo.complete}</a></li>           
                        </div>  */}
                    </div>
                    
                )
            })}
          </ul>
        </div>
    )
}