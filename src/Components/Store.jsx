import { createStore ,combineReducers } from "redux";
import { CounterReducer } from "./CounterReducer";
import { todoReducer } from "./TodoState";

const rootReducer=combineReducers({
  counter: CounterReducer,
  todo: todoReducer
})

export const store = createStore(rootReducer)

store.subscribe(()=>{console.log(store.getState())})