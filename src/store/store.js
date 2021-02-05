
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
export const STOP = 'STOP';
export const WAIT = 'WAIT';
export const START = 'START';
export const RESET = 'RESET';

const initialState = {
    mode: START,
    value:0
}

export function modeReduser(state = initialState,action){

    switch (action.type) {
        case START: {
        let copyOfState = {...state};
        copyOfState.mode = START;
        return copyOfState;  
    }  
            break;
        case STOP: {
        let copyOfState = {...state};
        copyOfState.mode = STOP;
        return copyOfState;  
        }      
            break;
        case WAIT: {
        let copyOfState = {...state};
        copyOfState.mode = WAIT;
        return copyOfState;   
        }       
            break;
        case RESET: {
            let copyOfState = {...state};
        copyOfState.mode = RESET;
        return copyOfState; 
        }         
            break;
    
        default:
            return state
            break;
    }


}

export const store = createStore(modeReduser,applyMiddleware(thunk))


