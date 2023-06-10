import React from "react";

import HomeScreen from "./pages/HomeScreen.js"
import SignUp from "./pages/SignUp.js"
import Login from "./pages/Login.js"
import Games from "./pages/Games.js"
import GameDetails from "./pages/GameDetails.js";
import Account from "./pages/Account.js";
import UserGames from "./pages/UserGames.js";
import { Routes,Route } from "react-router-dom";
import WriteComment from "./pages/WriteComment.js";
import ViewComment from "./pages/ViewComment.js";
import UserReviews from "./pages/UserReviews.js";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/games" element={<Games />} />
        <Route path="/game/:id" element={<GameDetails />} />
        <Route path="/user/account" element={<Account />} />
        <Route path="/user/games" element={<UserGames />} />
        <Route path="/user/reviews" element={<UserReviews />} />
        <Route path="/user/info" element={<Account />} />
        <Route path="/write/comment/game/:id" element={<WriteComment />} />
        <Route path="/view/comment/game/:id" element={<ViewComment />} />
      </Routes>
    </div>
  );
}

export default App;
