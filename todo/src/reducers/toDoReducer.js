export const initialState = {
     name: '',
     completed: false,
     id: Date.now(),
     tasks:[]
 };

 export const reducer = (state, action) => {
     switch(action.type) {
        case 'TOGGLE_COMPLETED':
            return {
                 ...state, 
                 completed: !state.completed
             };
         
        case 'ADD_NEW_TASK':
            const newTask = {
            name: action.payload,
            id: Date.now(),
            completed:false
        };

        return {
            ...state,
            tasks: [...state.tasks, newTask]
         };

        default:
            return state
    }
};

