import React from "react";

import HomeScreen from "./pages/HomeScreen.js"
import SignUp from "./pages/SignUp.js"
import Login from "./pages/Login.js"
import Games from "./pages/Games.js"
import GameDetails from "./pages/GameDetails.js";

import { Routes,Route } from "react-router-dom";

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
