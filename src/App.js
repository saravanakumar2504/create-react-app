import { Counter } from "./components/Counter";
import { ToggleSwitch } from "./components/ToggleSwitch";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Counter />
      <div className="toggleSwitchContainer">
        Toggle switch using functional component: 
        <ToggleSwitch label="Notifications" />
        <ToggleSwitch label="Subscribe" />
      </div>
    </div>
  );
}

export default App;
