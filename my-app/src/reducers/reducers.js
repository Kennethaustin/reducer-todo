import {useReducer} from 'react';
export const initialState = {
    todo: [
        {
            item: 'Learn Dark mode themes',
            completed: false,
            id: 1234
        },

        {
            item: 'Listen to Syntax Podcast',
            completed: false,
            id: 1235
        },

        {
            item: 'Watch one creative coding video',
            completed: false,
            id: 1236
        },

        {
            item: 'Create A small react app',
            completed: false,
            id: 1237
        }
    ]
};

export default reducer= (state, action) => {
    switch(action.type){
        case action:
            return{
                ...state, ...action.payload
            };
            default: return state;
    }
}