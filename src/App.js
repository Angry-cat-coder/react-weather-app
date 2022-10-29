import Search from "./Search";
import Forecast from "./Forecast";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1> Weather search engine </h1>
      <Search />
      <Forecast />
    </div>
  );
}

export default App;
