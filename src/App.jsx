import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
