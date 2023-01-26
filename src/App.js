import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import SelectPage from "./pages/SelectPage";
import GamePage from "./pages/GamePage";
import MyPage from "./pages/MyPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/select" element={<SelectPage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/my" element={<MyPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
