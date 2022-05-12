import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ChoicePage from "./components/ChoicePage";
import GreenfoPage from "./components/GreenfoPage";
import QuizPage from "./components/QuizPage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/choice" element={<ChoicePage />} />
        <Route path="/greenfo" element={<GreenfoPage />} />
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
    </div>
  );
}

export default App;
