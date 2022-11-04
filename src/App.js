import Weather from "./Weather";

import Forecast from "./Forecast";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <Forecast />
      </div>
    </div>
  );
}
