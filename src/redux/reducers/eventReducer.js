import {fromJS} from 'immutable';

import actions from '../actions';

// const initialState = fromJS({
//     text : ['hi']
// });

const initialState = {
    text : ['hi']
};

const eventReducer = (state = initialState,action) => {
    switch(action.type){
        case actions.eventAction.SET_TEXT : 

            console.log(state.text);
            return {
                ...state,
                text : [...state.text,action.text]
            }
            
        
        default :
            return state;
    }
}

export default eventReducer;