import react from "react";

function TodoList({todo, onDelete, onToggle}){
    return(
        <ul>
            {TodoList.map(todo => (
                <li key={todo.id}>
                        <span>
                            onClick={()=> onToggle(todo.id, todo.completed)}
                        </span>
                        <button onClick={() => onDelete(todo.id)}>Delete</button>
                </li>
            ))}
        </ul>
    )
}