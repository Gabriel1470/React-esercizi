import { ClearToDo } from "./component/ClearToDo";
import { ResetToDo } from "./component/ResetToDo";
import { ToDoList } from "./component/ToDoList";


function App() {
  return (
    <div >
      <ToDoList/>
      <ClearToDo/>
      <ResetToDo/>
    </div>
  );
}

export default App;
