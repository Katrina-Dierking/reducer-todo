import React, {useState} from 'react';
// import {task} from '../reducers/toDoReducer';


const Form = ({dispatch}) => {
    const [newTask, setNewTask] = useState('')


    const handleChanges = e => {
        e.preventDefault()
        setNewTask(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault()
        dispatch({type: 'NEW_TASK', payload: newTask}) 
        setNewTask('');
    }




    return (
        
        <form onSubmit = {handleSubmit}>
            <div className="new-item"> 
                <input
                    className = "task-input"
                    type="text"
                    name="newTask"
                    value={newTask}
                    onChange ={handleChanges}
                    />
            </div>

            <button type ='submit'>Add New Task</button>    
            <br></br>
            <button 
                onClick = {() => 
                dispatch({ type: 'DELETE_COMPLETED' })}
                >Delete Completed
            </button>

        </form>
    );
}

export default Form; 