import React from 'react';



const ToDo = (props) => {
    
    return (
        <div className ={`${props.completed ? "completed" : ""}`}


        onClick = {() => props.toggleTaskCompleted(props.id)}>
            <h4>{props.title}</h4>
            
        </div>
    );
};


export const ToDoList = ({tasks, dispatch}) => {
  

    const toggleTaskCompleted = (id) => {
        dispatch ({
            type: 'TOGGLE_TASK_COMPLETED',
            payload: id
        });
    };


    return (
        <div className = "todos">
         {tasks.map (todo => (
             <ToDo
             {...todo}
            key = {todo.id}
            toggleTaskCompleted = {toggleTaskCompleted}
             />
         ))}
        
        </div>
    )
}