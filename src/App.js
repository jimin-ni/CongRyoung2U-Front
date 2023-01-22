import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import SelectPage from "./pages/SelectPage";
import GamePage from "./pages/GamePage";
import MyPage from "./pages/MyPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/select" element={<SelectPage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/my" element={<MyPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
