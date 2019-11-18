export const tasks = [
    {
    item: "Reorganize office",
    completed: false,
    id: 1
 },

 {
    item: 'Clean Out Truck',
    completed: false,
    id: 2,
    
  },
  {
    name: 'Write New Book',
    id: 3,
    completed: false
  },
  {
    name: 'Powerwash House',
    id: 4,
    completed: false
  },
  {
    name: 'Take Vacation',
    id: 5,
    completed: false
  }
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
            return state.map(tasks => {
                if (tasks.id === action.payload) {
                return { ...tasks, 
                 completed: !tasks.completed };
            
                }

             return tasks;
                });

        case 'CLEAR_COMPLETED':
            return state.filter (tasks => !tasks.completed);

        default:
            return state
    }
};

