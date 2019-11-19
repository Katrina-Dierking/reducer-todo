import React from 'react';

export const ToDo = (props) => {


    return (
        <div> 
            <h3 className = {props.item.completed ? "Competed To Do" : "To Do"}
            onClick = {() => {
                props.dispatch 
                ({
                    type: "TOGGLE_ITEM_COMPLETED",
                    payload: props.item.id
                })
            }}
            >{props.item.item}</h3>
        </div>
    )
}