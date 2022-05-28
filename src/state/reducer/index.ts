

import { combineReducers, createStore } from "redux";
import { BookingReducer } from "./BookingReducer";
//store
const reducers = combineReducers({
    booking: BookingReducer,
})

export default reducers;

export type State = ReturnType<typeof reducers>;