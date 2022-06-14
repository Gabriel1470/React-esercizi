import { InteractiveWelcome } from "./component/InteractiveWelcome";
import { Login } from "./component/Login";
import { LoginBTN } from "./component/LoginBTN";
import { UncontrolledLogin } from "./component/UncontrolledLogin";


function App() {
  return (
    <div>
    <InteractiveWelcome/>
    <Login/>
    <LoginBTN/>
    <UncontrolledLogin/>
    </div>
  );
}

export default App;
