import "./App.css";
import wineDataSet from "./dataStore/wineDataSet";
import BarChart from "./Components/BarChart";
import ScatterPlot from "./Components/ScatterPlot";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h3>MANUFAC - Coding Assignment</h3>
      </header>
      <div className="chartsHolder">
        <ScatterPlot wineDataSet={wineDataSet}></ScatterPlot>
        <BarChart wineDataSet={wineDataSet}></BarChart>
      </div>
      <footer className="footer">Submitted by G Gayathri G</footer>
    </div>
  );
}

export default App;
