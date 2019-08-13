
export const TOGGLE_ITEM ='TOGGLE_ITEM';
export const ADD_ITEM = 'ADD_ITEM';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';
export const initialState = {
    todo: [
        {
            item: 'Listen to lecture',
            completed: false,
            id: 1234
        },

        {
            item: 'follow the steps',
            completed: false,
            id: 1235
        },

        {
            item: 'Make it better',
            completed: false,
            id: 1236
        },

        {
            item: 'Create A react app',
            completed: false,
            id: 1237
        }
    ]
};

export const reducers= (state, action) => {
    switch(action.type){
        case ADD_ITEM:
            const newitems = {
                item: action.payload,
                id: Date.now(),
                completed: false
            };
            return{
                ...state,
                todo:[ ...state.todo, newitems]
            };
        case TOGGLE_ITEM:
            return {
                ...state,
                todo: state.todo.map(item => {
                    if (action.payload === item.id) {
                        return {
                            ...item,
                            completed: !item.completed
                        };
                    }
                    return item;
                })
            };
        case CLEAR_COMPLETED:
            return {
                ...state,
                todo: state.todo.filter(item => !item.completed)
            };
        default:
            return state;
    }
    };
