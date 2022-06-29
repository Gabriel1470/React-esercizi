import { store } from './Components/Store';
import { addTodo,removeTodo,editTodo } from './Components/TodoState';
import './App.css';
import { Counter } from './Components/Counter';


function App() {
  return (
   <Counter/>
  );
}
store.dispatch(addTodo({ id: 1, title: 'Sono stanco', completed: true }));
store.dispatch(addTodo({ id: 2, title: 'Andiamo al fresco sull himalaya', completed: true }));
store.dispatch(editTodo(1, {title: 'Fa Calloooooooo', completed: true}));
store.dispatch(removeTodo(1));
export default App;
