import React, {useReducer} from 'react';
import Form from './components/Form';
import {ToDoList} from './components/ToDoList';
import {task, reducer} from './reducers/toDoReducer';
import './App.css';



function App() {

  const [state, dispatch] = useReducer(reducer, task);


  return (
    <div className="App">
      <header className="App-header">
        <h1>My To Do List</h1>
        <Form dispatch ={dispatch} />
        <br></br>
        <ToDoList tasks={state.tasks} dispatch = {dispatch} /> 
        {/* gives them access to dispatch */}
      </header>
        
    </div>
  );
}

export default App;
