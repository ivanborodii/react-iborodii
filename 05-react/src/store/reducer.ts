import { combineReducers } from "redux";
import { reducer as waiterReducer } from '../features/waiter/store/reducer';

export const reducer = combineReducers({
    waiter: waiterReducer,
});