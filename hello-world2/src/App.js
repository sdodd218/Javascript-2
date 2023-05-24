import logo from "./logo.svg";
import "./App.css";
import { Greet, Greet2, Greet3 } from "./Component/Greet";
import {Welcome, Welcome2} from "./Component/Welcome";
import Message from ".components/Message";

function App() {
  return (
    <div className="App">
      {/*<Greet name="Shannon" nickname="Shan">
        <button>Visit Website</button>
        <p> Hello World! This is my paragraph</p>
        </Greet>
      <Greet name="Kaylee" nickname="Kay" />
      <Greet2 name="Curtis" nickname="Cur" />
      <Greet3 name="Faye" nickname="Fay" />
      <Welcome name="Shannon" nickname="Shan" />
      <Welcome name="Kaylee" nickname="Kay" />
      <Welcome2 name="Curtis" nickname="Cur" />
      <Welcome2 name="Faye" nickname="Fay" /> */}
      <Message />
    </div>
  );
}

export default App;
