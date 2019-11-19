export const initialState = [
    {
    item: "Reorganize Office",
    completed: false,
    id: 1
 },

 {
    item: 'Clean Out Truck',
    completed: false,
    id: 2,
    
  },
  {
    name: 'Plan Disney Trip',
    id: 3,
    completed: false
  },
 
];


 export const reducer = (state, action) => {
     switch(action.type) {
        case 'ADD_NEW_TASK':
            return [ ...state,
                {
                item: action.payload,
                completed:false,
                id: Date.now(),
                }];
    
        case 'TOGGLE_COMPLETED':
            return state.map(initialState => {
                if (item.id === action.payload) {
                return { ...initialState, 
                 completed: !item.completed };
            
                }
                return tasks;
                });

        case 'CLEAR_COMPLETED':
            return state.filter (tasks => !tasks.completed);

        default:
            return state;
    }
};

