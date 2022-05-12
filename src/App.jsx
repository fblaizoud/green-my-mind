import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ChoicePage from "./components/ChoicePage";
import GreenfoPage from "./components/GreenfoPage";
import QuizPage from "./components/QuizPage";
import GreenfoCategory from "./components/GreenfoCategory";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/choice" element={<ChoicePage />} />
        <Route path="/greenfo" element={<GreenfoPage />} />
        <Route path="/greenfo/:theme" element={<GreenfoPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="greenfo/:title" element={<GreenfoCategory />} />
      </Routes>
    </div>
  );
}

export default App;
