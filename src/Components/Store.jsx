import { createStore ,combineReducers } from "redux";
import { CounterReducer } from "./CounterReducer";
import { todoReducer } from "./TodoState";

const rootReducer=combineReducers({
  counter: CounterReducer,
  todo: todoReducer
})
/* fatto redux 04 senza saperlo */
export const store = createStore(rootReducer)

store.subscribe(()=>{console.log(store.getState())})