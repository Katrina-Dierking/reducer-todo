import React, {useState, useReducer} from 'react';

import {initialState, reducer} from '../reducers/toDoReducer';

const ToDoForm = () => {
    const [{name, completed}, dispatch] = useReducer(reducer, initialState);
    const [newTask, setNewTask] = useState('');

    const handleChanges = e => {
        setNewTask(e.target.value);
    }


    return (

        <div>
            {!completed ? (
                {completed} {'false'}
                onClick ={() => dispatch({ type: 'TOGGLE_COMPLETED' })}
                
            ) : (

            <div>
                <input
                className ="toDo-input"
                type="text"
                name="newItem"
                value={newName}
                onChange={handleChanges}
                />
                <button
                    onClick ={() =>
                    dispatch ({ type: 'ADD_NEW_TASK', payload: newTask})
                }
                >
                    Add To Do Item
                    </button>
            </div>
            )}
        </div>
    );
};
export default ToDoForm;