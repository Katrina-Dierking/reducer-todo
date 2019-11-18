import React, {useReducer} from 'react';
import {reducer, tasks} from '../reducers/toDoReducer';
import ToDo from './ToDo';
import ToDoForm from './ToDoForm';

const ToDoList = () => {
    const [state, dispatch] = useReducer (reducer, tasks);

    return (
        <div>
            <ToDoForm dispatch = {dispatch} />
                {state.map(tasks => {
                    return (
                    <ToDo 
                        key = {tasks.id}
                        tasks = {tasks}
                        dispatch = {dispatch} 
                    />                       
                )})}
        </div>
    )
}

export default ToDoList;

