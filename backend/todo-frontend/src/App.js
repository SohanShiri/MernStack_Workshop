import React,{useState, useEffect} from 'react';
import './App.css';
import api from './api'
function App() {
  const[todos,setTodos]= useState([]);
  useEffect(()=>{
    api.get('/api/todos').then(res => setTodos(res.data))

    const deleteTodo = async
    .catch(err => console.error(err));
  })
  return (
    <div>
      <h1>To-do-List</h1>
      <ul>
        {todos.map(
          todo =>(
            <li key ={todo.id}>
              {todo.title} - {todo.completed ? 'Done':'Unfinished'}

            </li>
          ))}
         
      </ul>
    </div>
  )
}

export default App;
