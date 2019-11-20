export const task = {
    tasks:[
        {title: 'Hang magnetic board',
        completed: false,
        id: 1
        }
    ]
};

export const reducer = (state, action) => {
     switch(action.type) {
         case 'NEW_TASK':
             console.log(state)
             const newTask = {
                 title: action.payload,
                 completed: false, 
                 id: Date.now()
             };
             return {
                 ...state,
                 tasks: [...state.tasks, newTask]
             };

             case 'TOGGLE_TASK_COMPLETED':
                return {
                    ...state, 
                    tasks: 
                    state.tasks.map(task => {
                    if (task.id === action.payload) {
                        return {
                            ...task, completed: !task.completed};
                        } else {
                            return task;
                        }
                    
                })
            }

             case 'DELETE_COMPLETED':
                 return {
                    tasks: state.tasks.filter (todo =>
                    !todo.completed)
                 };

         
       
        default:
            return state;
    }
};

