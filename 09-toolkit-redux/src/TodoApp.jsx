import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis"

export const TodoApp = () => {

    const [ todoId, settodoId ] = useState(1);

    const { data: todo, isLoading } = useGetTodoQuery( todoId );
    console.log(todo);


  return (
    <>
        <h1> Todos - RTK Query </h1>
        <hr/>
        <h4>  is Loading: { isLoading ? 'True' : 'False' }  </h4>
        
        <pre> { JSON.stringify(todo) } </pre>

        <button
            onClick={ () => {
                if( todoId === 1  ) return;
                settodoId( todoId - 1 )} }
        >
            Prev Todo 
        </button>
        <button
            onClick={ () => settodoId( todoId + 1 ) }
        >
            Next Todo 
        </button>
        {/* <ul>
            { todos.map( todo => (                
                <li key={ todo.id } > 
                <strong>{ todo.completed ? 'DONE' : 'UNDONE' }</strong>
                { todo.title } 
                </li>
            ) )}
        </ul> */}

        
    
    </>
  )
}
