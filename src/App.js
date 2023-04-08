import React from "react";

import HomeScreen from "./pages/HomeScreen"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import Games from "./pages/Games"

import { Routes,Route } from "react-router-dom";
import GameDetails from "./pages/GameDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/games" element={<Games />} />
        <Route path="/game/:id" element={<GameDetails />} />
      </Routes>
    </div>
  );
}

export default App;
