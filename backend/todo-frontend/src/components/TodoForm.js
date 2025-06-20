import api from "./api";
import React, {useState,useEffect} from "react";


function TodoForm({onTodoAdded}){
    const[title,setTitle] = useState('');



    const handelsubmit=(e) =>{
        e.preventDefault();
        api.post('/',{title});
        onTodoAdded();
        setTitle("");
    };
    return(
        <form onSubmit={handelsubmit}>
            <input placeholder="Add a task" 
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
            />
            <button type="submit">Add</button>
        </form>
    )
}
export default TodoForm