import "./App.css";
import MiddleName from "./components/MiddleName";
import FirstName from "./components/FirstName";

function App() {
  return (
    <div className="App">
      <h1>Baby Name Generator</h1>

      <h2>
        First Name
        <FirstName />
      </h2>
      <h2>
        Middle Name
        <MiddleName />
      </h2>
    </div>
  );
}

export default App;
