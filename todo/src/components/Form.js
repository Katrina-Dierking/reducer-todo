import React, {useState} from 'react';

const Form = (props) => {
const[newItem, setNewItem] = useState()

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
                }}
                < ~ Add new task ~ >
            </button>    
        </form>
    );
}

export default Form; 