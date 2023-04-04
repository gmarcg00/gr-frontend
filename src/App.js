import React from "react";

import HomeScreen from "./pages/HomeScreen"
import Login from "./pages/Login"

import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
