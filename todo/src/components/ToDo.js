import React from 'react';

function ToDo ({ tasks, dispatch }) {
    const toggleCompleted = () => {
        dispatch ({
            type: 'TOGGLE_COMPLETED', 
            payload: tasks.id
        });
    };

    return (
        <>
        <div onClick = {toggleCompleted}></div>
        <p>{tasks.item}</p>
        </>
    );
}

export default ToDo;