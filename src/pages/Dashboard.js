import React from "react";
import Navbar from "../components/Navbar.jsx";
import Cookies from "universal-cookie";

function Dashboard(){
    const cookies = new Cookies();
    return(
        <>
            <Navbar userName={cookies.get("userName")} isSession={cookies.get("isSession")} />
            <h3>UserId: {cookies.get("userId")}</h3>
            <h3>UserName: {cookies.get("userName")}</h3>
            <h3>Email: {cookies.get("email")}</h3>
            <h3>Sesion: {cookies.get("isSession")}</h3>
        </>
    );
}

export default Dashboard;