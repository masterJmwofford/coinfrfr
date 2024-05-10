import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import "./App.css";
// import stocks from "./models/data";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Stock from "./components/Stock";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/stocks" element={<Stock />} />
        <Route path="/stocks/:symbol" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
