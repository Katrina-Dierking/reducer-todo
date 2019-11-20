export const task = {
    item: 'Hang magnetic board',
    completed: false,
    id: 1,
    tasks: []
};

export const reducer = (state, action) => {
     switch(action.type) {
         case 'NEW_ITEM':
             const newTask = {
                 item: action.payload,
                 completed: false, 
                 id: Date.now()
             };
             return {
                 ...state,
                 tasks: [...state.tasks, newTask]
             };

             case 'TOGGLE_ITEM_COMPLETED':
                return state.map(task => {
                    if (task.id === action.payload) {
                        return {
                            ...task, completed: !task.completed};
                        } else {
                            return task;
                        }
                });

             case 'DELETE_COMPLETED':
                 return {
                     ...state,
                     completed: !state.completed
                 };

         
       
        default:
            return state;
    }
};

