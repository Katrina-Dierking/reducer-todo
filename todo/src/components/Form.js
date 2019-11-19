import React, {useState, useReduce} from 'react';
import {initialState, reducer} from './reducers/reducer';
import ToDo from './components/ToDo';


const Form = (props) => {
const [state, dispatch] = useReducer(reducer, initialState);
const [newItem, setNewItem] = useState()

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
                    
                        
                <input 
                    type="checkbox" 
                    name="newItemComplete" 
                    value={newItemCompleted}
                    />
            </div>

            <button className = "submit-button">
                onClick = {() => {
                    props.dispatch({
                    type: "NEW_ITEM", 
                    payload: newItem})
                    setNewItem('')
                }} +
                < ~ Add new task ~ >
            </button>    

            <button 
                onClick = {() => 
                dispatch({ type: "deleteCompleted"})}
                >Delete Completed
                </button>
                
                {state.map(item => {
                    return <ToDo 
                        key={item.id} 
                        item={item} 
                        dispatch={dispatch}/>
                })}
        </form>
    );
}

export default Form; 