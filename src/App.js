import Search from "./Search";
import Forecast from "./Forecast";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <Forecast />
      </div>
    </div>
  );
}
