import FilterdList from "./Components/FilteredList";
import { useState } from "react";
function App() {
 const [list, setList] = useState([{
  id: 1,
  name: 'Gulius',
  age: 7
}, {
  id: 2,
  name: 'Golias',
  age: 22
},
{
  id: 3,
  name: 'Frodum',
  age: 19
},
{
  id: 4,
  name: 'Valkir',
  age: 4
}])


  return (
    <div>
<FilterdList list={list}/>
    </div>
  );
}

export default App;
