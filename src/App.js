import "./App.css";
import SearchEngine from "./SearchEngine";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello from React!!</h1>
        <Weather city="Paris" />
        <SearchEngine />
      </header>
      <p>
        <a href="https://github.com/KerstinMN/weather-react">
          Open-source code{" "}
        </a>
        by Kerstin Mayer-Nelkenstock
      </p>
    </div>
  );
}

export default App;
