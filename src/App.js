import { ClearLi } from "./component/ClearLi";
import { ClearToDo } from "./component/ClearToDo";
import { ResetToDo } from "./component/ResetToDo";
import { ToDoList } from "./component/ToDoList";


function App() {
  return (
    <div >
      <ToDoList/>
      <ClearToDo/>
      <ResetToDo/>
      <ClearLi/>
    </div>
  );
}

export default App;
