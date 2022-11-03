import Weather from "./Weather";
import Forecast from "./Forecast";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1> Weather search engine </h1>
        <Weather />
        <Forecast />
      </div>
    </div>
  );
}
