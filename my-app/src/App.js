import "./App.css";
import MiddleName from "./components/MiddleName";
import UseFirstName from "./components/FirstName";
import { data } from "./data";
function App() {
  return (
    <div className="App">
      <h1>Gender Neutral Baby Name Generator </h1> First Name
      <UseFirstName />
      Middle Name
      <MiddleName />
    </div>
  );
}

export default App;
