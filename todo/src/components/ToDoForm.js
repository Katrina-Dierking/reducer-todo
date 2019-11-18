import React, {useState} from 'react';


const ToDoForm = ({dispatch}) => {
    const [item, setItem] = useState('');

    const handleChanges = e => {
        setItem(e.target.value);
    };

    const submitForm = e => {
        e.preventDefault();
        dispatch ({
            type: 'ADD_NEW_TASK',
            payload: item
        });
        setItem('');
    };

    const clearCompleted = e => {
        e.preventDefault();
        dispatch ({
            type: 'CLEAR_COMPLETED'
        });
    };


    return (

        <div>
            <form onSubmit = {submitForm}>
              <input 
                name = "tasks"
                onChange = {handleChanges}
                value = {item}
                />

                <button
                    >
                    ADD NEW TASK
                    </button> 

                <button 
                    onClick = {clearCompleted}
                    >
                    CLEAR COMPLETED
                    </button>
            </form>
        </div>
    );
};
export default ToDoForm;