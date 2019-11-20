import React, {useState, useReducer} from 'react';
import {task, reducer} from '../reducers/toDoReducer';



const ToDo = ({task, dispatch}) => {
    const toggleItemCompleted = () => {
        dispatch ({
            type: 'TOGGLE_ITEM_COMPLETED',
            payload: task.id
        });
    };
    return (
        <div onClick = {toggleItemCompleted}>
            <h3>{task.item}</h3>
        </div>
    );

};


const Form = () => {
    const [newItem, setNewItem] = useState('')
    const [state, dispatch] = useReducer (reducer, task);


const handleChanges = e => {
    setNewItem(e.target.value);
};



    return (
        <form>
            <div className="new-item-and-complete"> 
                <input
                    className = "item-input"
                    type="text"
                    name="newItem"
                    value={newItem}
                    onChange ={handleChanges}
                    />
            </div>

            <button className = "add-new-item-button">
                onClick = {() => {
                    dispatch ({
                        type: 'NEW_ITEM', 
                        payload: newItem
                    }); setNewItem ('') }} +
                      Add new task  
            </button>    

           <ToDo />

            <button 
                onClick = {() => 
                dispatch({ type: 'DELETE_COMPLETED' })}
                >Delete Completed
            </button>

        </form>
    );
}

export default Form; 