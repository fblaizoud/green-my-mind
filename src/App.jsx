import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import GreenfoPage from "./components/GreenfoPage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/greenfo" element={<GreenfoPage />} />
      </Routes>
    </div>
  );
}

export default App;
