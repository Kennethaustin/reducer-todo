import {useReducer} from 'react';

export default reducer= (state, action) => {
    switch(action.type){
        case action:
            return{
                ...state, ...action.payload
            };
            default: return state;
    }
}