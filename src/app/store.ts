import { INCREMENT, DECREMENT } from './actions';

export interface IAppState {
    counter?: number;
    ids?:any[];
}

export const INITIAL_STATE: IAppState = {
    counter: 0,
    ids:[]
}

export function rootReducer(state: IAppState, action): IAppState{
    switch (action.type) {
        // case INCREMENT: return { counter: state.counter + 1}
        // case INCREMENT: return { ids: state.ids.concat({id: action.id})}
        case INCREMENT: return { ids: state.ids.concat(action.id)}
        // if ((Array.from(new Set(contractNames))).length > 1) {
         case DECREMENT: return { ids: state.ids.filter(item => item !== action.id)}
    }

    return state;
}